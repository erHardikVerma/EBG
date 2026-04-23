import PyPDF2
import sys

def extract_text(pdf_path, txt_path):
    with open(pdf_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        with open(txt_path, 'w', encoding='utf-8') as out_file:
            for page in reader.pages:
                text = page.extract_text()
                if text:
                    out_file.write(text + "\n---\n")

if __name__ == "__main__":
    extract_text("Adhira & Appa Deck_Phase III_Updated (1).pdf", "extracted_text.txt")
