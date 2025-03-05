export const RandomKey = (length = 5) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

export const printStyleHtml = (name: string, code: string) => {
  return `.${name}:before {content: "\\${code}"}`;
};

export const toBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        reject(new Error("Failed to convert file to base64."));
      }
    };
    reader.onerror = () => reject(reader.error);
  });
};

export const GetAllServices = (allData: ICategory[], side: "ui" | "ux") => {
  return allData
    .filter((item) => item.parent_id === 200000)
    .map((item) => {
      const oldItem = { ...item };
      if (side === "ui") {
        oldItem.name = oldItem.name.split("|")[0];
      } else if (side === "ux") {
        oldItem.name = oldItem.name.split("|")[1];
      }

      return oldItem;
    });
};

export const GetAllServicesTypes = (allData: ICategory[]) => {
  return allData.filter((item) => item.parent_id === 100001);
};
