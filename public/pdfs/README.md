# PDF Files

Place your PDF files in this directory:

1. **10-ways-revitalize-marriage.pdf** - Free version (10 tips)
2. **25-ways-revitalize-marriage.pdf** - Premium version (25 tips)

## Important Notes

- These files should be added before deployment
- File names must match exactly (case-sensitive)
- PDFs will be served from `/pdfs/[filename]`
- The existing PDF you have is: `10WaysToRevitalizeYourMarriage-Top10-revised.pdf`

## To Add Your PDFs

1. Rename your existing PDF to: `10-ways-revitalize-marriage.pdf`
2. Create or add your premium 25-ways version: `25-ways-revitalize-marriage.pdf`
3. Place both files in this directory

## File Requirements

- Format: PDF
- Max size: 10MB recommended (Vercel limit: 50MB)
- Ensure files are not corrupted and can be opened

## Testing Locally

After adding the files, you can test the download links:
- Free: `http://localhost:3000/pdfs/10-ways-revitalize-marriage.pdf`
- Premium: `http://localhost:3000/pdfs/25-ways-revitalize-marriage.pdf`

