# ⚠️ PDF Setup Required

## Action Needed Before Testing

You need to add your PDF files to the `public/pdfs/` directory before the site will work properly.

### Your Existing PDF

You mentioned you have: `10WaysToRevitalizeYourMarriage-Top10-revised.pdf`

### Steps to Add PDFs

1. **Locate your existing PDF** (mentioned in our conversation)

2. **Copy and rename it**:
   ```bash
   # From wherever your PDF is located, copy it to:
   cp /path/to/10WaysToRevitalizeYourMarriage-Top10-revised.pdf \
      public/pdfs/10-ways-revitalize-marriage.pdf
   ```

3. **For the premium version**:
   - If you have a 25-ways version, rename it to: `25-ways-revitalize-marriage.pdf`
   - If you don't have it yet, temporarily duplicate the free version:
     ```bash
     cp public/pdfs/10-ways-revitalize-marriage.pdf \
        public/pdfs/25-ways-revitalize-marriage.pdf
     ```

4. **Verify the files are in place**:
   ```bash
   ls -la public/pdfs/
   ```

   You should see:
   - `10-ways-revitalize-marriage.pdf` (free version)
   - `25-ways-revitalize-marriage.pdf` (premium version)

### Testing After Adding PDFs

Once PDFs are in place:

1. Start the dev server: `npm run dev`
2. Test free download flow
3. Test premium purchase flow
4. Both download links should work

### For Deployment

Make sure both PDFs are committed to git and deployed with your site.

---

**Don't forget this step!** The site is fully built and ready, but it needs the PDFs to function.

