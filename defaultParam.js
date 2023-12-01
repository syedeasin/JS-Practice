var javascript = {
  name: "javascript",
  libraries: ["React", "Angular", "Vue"],
  printLibraries: function () {
    this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`));
  },
};

javascript.printLibraries();
