import { Notes, DriveFiles } from "@/models/index.js";

export async function setLocalInteraction( noteid: string ) {
	const note = await await Notes.findOneBy({ id: noteid });
	
	await Notes.update(noteid, {localInteraction: true});

	for (const fileid of note.fileIds) {
		await DriveFiles.update(fileid, {localInteraction: true});
	}
}
