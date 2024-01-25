import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../firebase";

const uploadFile = async (
  file: any,
  onProgress: (progress: number) => void,
  onDownloadUrl: (downloadUrl: string) => void
) => {
  const storageRef = ref(storage, "profileimage/" + file.name);

  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      onProgress(progress);
    },
    (error) => {
      console.log(error);
    },
    async () => {
      return await getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) =>
        onDownloadUrl(downloadUrl)
      );
    }
  );

  // Create a reference to the storage location
  //   const storageRef = ref(storage, "profileimage/" + file.name);

  //   try {
  //     await uploadBytes(storageRef, file).;
  //     const downloadURL = await getDownloadURL(storageRef);

  //     console.log("File uploaded successfully!");
  //     return downloadURL;
  //   } catch (error) {
  //     console.error("Error uploading file:", error);
  //   }
};

export { uploadFile };
