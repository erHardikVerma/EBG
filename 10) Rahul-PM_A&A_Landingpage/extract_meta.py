import fitz  # PyMuPDF
import json

def extract_metadata(pdf_path):
    doc = fitz.open(pdf_path)
    metadata = doc.metadata
    print("Metadata:")
    print(json.dumps(metadata, indent=4))
    print(f"Number of pages: {len(doc)}")
    
    # Let's see if we can find any images on the first page
    if len(doc) > 0:
        page = doc[0]
        images = page.get_images()
        print(f"Number of images on first page: {len(images)}")
        
if __name__ == "__main__":
    extract_metadata("Adhira & Appa Deck_Phase III_Updated (1).pdf")
