# OBG Website — Asset Placement Guide

All code is wired up and ready. You just need to download these files from Google Drive
and drop them into the correct folders below. Takes about 2 minutes.

---

## 📁 Folder Structure (already created)

```
public/
  logos/
    obg-logo-white.png        ← OBG header logo (white)
    clients/
      irn-bru.png
      rbdx.png
      scale-insights.png
      stacked-skincare.png
      neutralyze.png
      num-num.png
      gold-collagen.png
      theralast.png
      popflex.png
      oconnell-co.png
  team/
    Jon.png
    Dan.png
    Juan.png
    Theresa.png
    Cha.png
    Paulene.png
```

---

## 1. OBG Logo → `public/logos/`

**From Drive:** [OBG Logo folder](https://drive.google.com/drive/folders/1g6e_fI4-K130Z098HxbzkI8h8MrwMFhe)

| File to download | Save as |
|-----------------|---------|
| `8.01 - 400x400 - MLP - OConnell & Co Digital Media - 272169.png` | `obg-logo-white.png` |

> This is the **white** version of the full logo (cube + "Online Brand Growth" text).
> It renders perfectly on the dark navy header.

**Optionally also save:**
- `1.01 - ...png` → `obg-logo-blue.png` (for light backgrounds)
- `7.01 - ...png` → `obg-logo-icon.png` (cube icon only, for favicon)

---

## 2. Team Illustrations → `public/team/`

**From Drive:** [Team Member 2026 folder](https://drive.google.com/drive/folders/1zmArLnDfv3VBaGS62Whx9j2CLBi2g9NE)

Download all 6 files — keep their exact filenames:

| Download | Save as |
|----------|---------|
| `Jon.png` | `Jon.png` |
| `Dan.png` | `Dan.png` |
| `Juan.png` | `Juan.png` |
| `Theresa.png` | `Theresa.png` |
| `Cha.png` | `Cha.png` ← this is Czharina |
| `Paulene.png` | `Paulene.png` |

> The illustrations are black line-art on transparent background.
> The code automatically inverts them to white for the dark theme.

---

## 3. Client Logos → `public/logos/clients/`

### From Dan's Website Assets folder:
**Drive:** [Website Assets](https://drive.google.com/drive/folders/1DfAsbNtYUS0uykpOMkC-JabT17uxdEU6)

| Original filename in Drive | Save as |
|---------------------------|---------|
| `OBG Client Neutralyze.png` | `neutralyze.png` |
| `OBG Client Num Num.png` | `num-num.png` |
| `OBG Client Gold Collagen.png` | `gold-collagen.png` |
| `OBG Client Theralast.png` | `theralast.png` |
| `Online Brand Growth Client PopFlex.png` | `popflex.png` |

### From individual brand folders:

| Drive Folder | Save as |
|-------------|---------|
| [Irn Bru](https://drive.google.com/drive/folders/1sheNqs-YZVeWpx1mcDfrZeUDzq-c62kR) — grab the main logo PNG | `irn-bru.png` |
| [RBDX](https://drive.google.com/drive/folders/1RDMpd1WfA7LOOoXNxu7oorcB-1i6JknE) — grab the main logo PNG | `rbdx.png` |
| [Scale Insights](https://drive.google.com/drive/folders/1RXOG8_CHLNBJUcbgmTgIofXkjJcVZOPn) — grab the main logo PNG | `scale-insights.png` |
| [Stacked Skincare](https://drive.google.com/drive/folders/1wREjbWrtsI5Zd9EWhbCs2rG1NIDUQ10s) — grab the main logo PNG | `stacked-skincare.png` |

### OConnell & Co:
When you have the OConnell & Co logo, save it as `oconnell-co.png` in `public/logos/clients/`.

### Amazon Certified PPC Logo (from your Slack DMs):
Save it as `public/logos/amazon-ppc-certified.png`

---

## 4. Quick Steps

1. Open each Google Drive link above in your browser
2. Select all files → Download (or download one at a time)
3. Rename files to match the "Save as" column
4. Drag them into the correct folder inside `Online Brand Growth Website Rebuild/public/`
5. Run `npm run dev` — everything loads automatically!

---

## Notes

- All logos in the brand partners marquee are displayed in **white** (CSS `brightness-0 invert`)
  so they look unified on the dark background — no need to find white-only versions.
- Team illustrations are **inverted white** automatically via CSS.
- If a logo file is missing, the site still runs — you'll just see a broken image icon
  until the file is added.
