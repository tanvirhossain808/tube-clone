import { moment } from "./ExportLib/ExportLib";

const formatUploadedDay = (uploadDate: string): string => {
  const diffInMs = moment().diff(uploadDate); // Assuming `uploadDate` is ISO format

  const seconds = diffInMs / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const weeks = days / 7;
  const years = days / 365.25;

  if (years >= 1)
    return Math.floor(years) + (years > 1 ? " years ago" : " year ago");
  else if (weeks >= 1)
    return Math.floor(weeks) + (weeks > 1 ? " weeks ago" : " week ago");
  else if (days >= 1)
    return Math.floor(days) + (days > 1 ? " days ago" : " day ago");
  else if (hours >= 1)
    return Math.floor(hours) + (hours > 1 ? " hours ago" : " hour ago");
  else if (minutes >= 1)
    return Math.floor(minutes) + (minutes > 1 ? " minutes ago" : " minute ago");
  else
    return Math.floor(seconds) + (seconds > 1 ? " seconds ago" : " second ago");
};

export default formatUploadedDay;
