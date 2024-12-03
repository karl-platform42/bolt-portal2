import { google } from 'googleapis';
import dotenv from 'dotenv';

dotenv.config();

const { GOOGLE_API_KEY, FOLDER_ID } = process.env;

const drive = google.drive({ version: 'v3', auth: GOOGLE_API_KEY });

export async function getFolderContents(folderId = FOLDER_ID) {
  try {
    const res = await drive.files.list({
      q: `'${folderId}' in parents and trashed = false`,
      fields: 'files(id, name, mimeType)',
    });

    console.log('API Response:', res.data.files); // Debug: Log response data

    const items = res.data.files.map(file => ({
      id: file.id,
      name: file.name,
      type: file.mimeType.includes('folder') ? 'folder' : 'file',
    }));

    return items;
  } catch (error) {
    console.error('Error fetching folder contents:', error);
    return [];
  }
}
