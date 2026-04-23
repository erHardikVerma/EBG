import fitz  # PyMuPDF
import sys

def extract_text(pdf_path, txt_path):
    doc = fitz.open(pdf_path)
    with open(txt_path, 'w', encoding='utf-8') as out_file:
        for page_num in range(len(doc)):
            page = doc[page_num]
            text = page.get_text()
            if text.strip():
                out_file.write(text + "\n---\n")

if __name__ == "__main__":
    extract_text("Adhira & Appa Deck_Phase III_Updated (1).pdf", "extracted_text_fitz.txt")
