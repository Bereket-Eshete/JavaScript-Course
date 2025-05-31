let job = "Software Developer";

if (job === "Software Developer") {
  console.log("write code");
} else if (job === "designer") {
  console.log("make user interface document");
} else if (job === "Cloud Engineer") {
  console.log("Manage and deploys cloud resource");
} else {
  console.log("works directly with customer");
}

switch (job) {
  case "Software Developer":
    console.log("write code");
    break;
  case "designer":
    console.log("make user interface document");
    break;
  case "Cloud Engineer":
    console.log("Manage and deploys cloud resource");
    break;
  default:
    console.log("works directly with customer");
}
