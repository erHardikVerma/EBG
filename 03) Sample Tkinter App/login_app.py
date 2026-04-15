import tkinter as tk
from tkinter import ttk, messagebox
import mysql.connector

# Main window
root = tk.Tk()
root.title("Login and Signup")
root.geometry("420x420")

# ===== Signup/Login Tabs =====
tabs = ttk.Notebook(root)
tabs.pack(expand=True, fill='both')

signup_frame = ttk.Frame(tabs)
tabs.add(signup_frame, text="Signup")

login_frame = ttk.Frame(tabs)
tabs.add(login_frame, text="Login")

# ===== Signup Widgets =====
tk.Label(signup_frame, text="SignUp", font=("Arial", 14)).place(x=150, y=10)

tk.Label(signup_frame, text="Enter your name:").place(x=30, y=50)
name = tk.Entry(signup_frame, width=25)
name.place(x=160, y=50)

gender = tk.StringVar(value="Male")
tk.Label(signup_frame, text="Gender:").place(x=30, y=80)
tk.Radiobutton(signup_frame, text="Male", variable=gender, value="Male").place(x=100, y=80)
tk.Radiobutton(signup_frame, text="Female", variable=gender, value="Female").place(x=160, y=80)

tk.Label(signup_frame, text="Enter phone number:").place(x=30, y=110)
number = tk.Entry(signup_frame, width=25)
number.place(x=160, y=110)

tk.Label(signup_frame, text="Enter Email id/username:").place(x=30, y=150)
signup_username = tk.Entry(signup_frame, width=25)
signup_username.place(x=160, y=150)

tk.Label(signup_frame, text="Enter Password:").place(x=30, y=180)
signup_password = tk.Entry(signup_frame, width=25, show='*')
signup_password.place(x=160, y=180)

tk.Label(signup_frame, text="Re-enter Password:").place(x=30, y=210)
repassword = tk.Entry(signup_frame, width=25, show='*')
repassword.place(x=160, y=210)

news = tk.BooleanVar()
tk.Checkbutton(signup_frame, text="Subscribe to news", variable=news).place(x=100, y=240)

def signup_submit():
    if signup_password.get() != repassword.get():
        messagebox.showwarning("Validation", "Passwords do not match!")
        return

    try:
        conn = mysql.connector.connect(host='localhost', user='root', password='', database='nne')
        cur = conn.cursor()
        sql = "INSERT INTO user (name, username, password) VALUES (%s, %s, %s)"
        cur.execute(sql, (name.get().strip(), signup_username.get().strip(), signup_password.get()))
        conn.commit()
        cur.close()
        conn.close()
        messagebox.showinfo("Success", "User created.")
    except mysql.connector.Error as e:
        messagebox.showerror("Database Error", str(e))
        return

    # Clear entries
    name.delete(0, 'end')
    number.delete(0, 'end')
    signup_username.delete(0, 'end')
    signup_password.delete(0, 'end')
    repassword.delete(0, 'end')
    news.set(False)

tk.Button(signup_frame, text="Submit", command=signup_submit).place(x=160, y=300)

# ===== PostLogin (Records) window with editable Treeview =====
def new_win1():
    root.withdraw()
    postlogin1 = tk.Toplevel()
    postlogin1.title("Records")
    postlogin1.geometry("700x450")

    # Frame for Treeview + scrollbars
    frame = ttk.Frame(postlogin1)
    frame.pack(fill="both", expand=True, padx=8, pady=8)

    tree = ttk.Treeview(frame, show="tree headings")
    tree.pack(side="left", fill="both", expand=True)

    vsb = ttk.Scrollbar(frame, orient="vertical", command=tree.yview)
    hsb = ttk.Scrollbar(postlogin1, orient="horizontal", command=tree.xview)
    tree.configure(yscrollcommand=vsb.set, xscrollcommand=hsb.set)

    def on_double_click(event):
        item_id = tree.identify_row(event.y)
        col_id = tree.identify_column(event.x)  # '#0', '#1', ...
        if not item_id or not col_id:
            return

        if col_id == "#0":
            messagebox.showinfo("Not allowed", "Primary key (id) cannot be edited.")
            return

        col_index = int(col_id.replace("#", ""))  # 1-based index for columns list
        db_col = column_names[col_index]  # map to actual column name

        current_id = tree.item(item_id, "text")  # id value (primary key)
        values = list(tree.item(item_id, "values"))
        current_value = values[col_index - 1]

        # Editor popup
        #Edit Window
        edit_win = tk.Toplevel(postlogin1)
        edit_win.title(f"Edit {db_col}")
        edit_win.geometry("360x130")
        edit_win.transient(postlogin1)
        edit_win.grab_set()

        tk.Label(edit_win, text=f"Edit {db_col}:", anchor="w").pack(pady=(12, 4), padx=12, fill="x")
        entry = tk.Entry(edit_win, width=40)
        entry.pack(padx=12)
        entry.insert(0, current_value)
        entry.focus_set()

        def save_edit():
            new_val = entry.get().strip()
            if new_val == current_value:
                edit_win.destroy()
                return
            try:
                conn2 = mysql.connector.connect(host="localhost", user="root", password="", database="nne")
                cur2 = conn2.cursor()
                sql = f"UPDATE user SET `{db_col}` = %s WHERE id = %s"
                cur2.execute(sql, (new_val, current_id))
                conn2.commit()
                cur2.close()
                conn2.close()
            except mysql.connector.Error as e:
                messagebox.showerror("Update error", str(e))
                return

            # Update treeview row
            values[col_index - 1] = new_val
            tree.item(item_id, values=values)
            edit_win.destroy()

        btn_frame = ttk.Frame(edit_win)
        btn_frame.pack(pady=10, fill="x", padx=12)
        ttk.Button(btn_frame, text="Save", command=save_edit).pack(side="left", padx=(0, 8))
        ttk.Button(btn_frame, text="Cancel", command=edit_win.destroy).pack(side="right")
    vsb.pack(side="right", fill="y")

    hsb.pack(side="bottom", fill="x")
    # Fetch records and populate tree

    try:
        conn = mysql.connector.connect(host="localhost", user="root", password="", database="nne")
        cursor = conn.cursor()
        cursor.execute("SELECT id, name, username FROM user")
        records = cursor.fetchall()
        column_names = [i[0] for i in cursor.description]  # ['id','name','username']

        # Configure columns: keep id as #0, others as named columns
        tree["columns"] = column_names[1:]
        tree.heading("#0", text=column_names[0], anchor="w")
        tree.column("#0", width=60, anchor="w")
        for col_name in column_names[1:]:
            tree.heading(col_name, text=col_name.capitalize(), anchor="w")
            tree.column(col_name, width=200, anchor="w")

        for record in records:
            tree.insert("", "end", text=record[0], values=record[1:])
    except mysql.connector.Error as err:
        messagebox.showerror("Database Error", str(err))
        return
    finally:
        try:
            cursor.close()
            conn.close()
        except:
            pass

    tree.bind("<Double-1>", on_double_click)
    # Double-click to edit a cell (single column at a time)

    # Optional: Add a logout/close button to return to login screen
    def close_and_back():
        try:
            postlogin1.destroy()
        finally:
            root.deiconify()

    ttk.Button(postlogin1, text="Logout / Back", command=close_and_back).pack(pady=6)

# ===== Login Widgets & Logic =====
tk.Label(login_frame, text="Login", font=("Arial", 14)).place(x=150, y=10)

tk.Label(login_frame, text="Enter your username:").place(x=30, y=60)
login_username = tk.Entry(login_frame, width=25)
login_username.place(x=160, y=60)

tk.Label(login_frame, text="Enter Password:").place(x=30, y=100)
login_password = tk.Entry(login_frame, width=25, show='*')
login_password.place(x=160, y=100)

def login_func():
    u = login_username.get().strip()
    p = login_password.get()
    try:
        conn = mysql.connector.connect(host='localhost', user='root', password='', database='nne')
        cur = conn.cursor()
        cur.execute("SELECT * FROM user WHERE username=%s AND password=%s", (u, p))
        result = cur.fetchone()
        cur.close()
        conn.close()
        if result:
            new_win1()
        else:
            messagebox.showerror("Login failed", "Username or password incorrect.")
    except mysql.connector.Error as e:
        messagebox.showerror("Database Error", str(e))

tk.Button(login_frame, text="Login", command=login_func).place(x=160, y=300)

root.mainloop()