class Note {
    constructor(title, body) {
      this.title = title;
      this.body = body;
    }
  }
  

  let Note1 = new Note("note one", "This is my first note");
  let Note2 = new Note("note two", "This is my second note");
  let Note3 = new Note("note three", "This is my third note");
  let NoteArray = [Note1, Note2,Note3];
  
 
  const NoteList_HTML = document.querySelector(".NoteList");
  const NoteArea = [
    document.getElementById("Cancel"),
    document.getElementById("Save"),
    document.querySelector("textarea")
  ];
  
  const Color_List = [];
  for (element of document.getElementsByClassName("light")) {
    Color_List.push(element);
  };
  

  Add_to_List = (Title, Body) => {
    New_Note = new Note(Title, Body);
    ListElement = document.createElement("li");
    ListElement.innerText = Title;
    NoteArray.push(New_Note);
    NoteList_HTML.appendChild(ListElement);
  };
  

  FindNote = event => {
    show_elements();
    for (note of NoteArray) {
      if (note.title == event.target.innerText) {
        document.querySelector("textarea").value = note.body;
      }
    }
  };
  
  
  show_elements = () => {
    if (!document.querySelector("textarea").hasAttribute("hidden")) {
      clear_text();
    }
    for (element of NoteArea) {
      if (element.hasAttribute("hidden")) {
        element.toggleAttribute("hidden");
      }
    }
  };
  

  dark_light_mode = event => {
    for (element of Color_List) {
      element.classList.toggle("light");
      element.classList.toggle("dark");
    }
    if (event.target.innerText == "Dark Theme") {
      event.target.innerText = "Light Theme";
    } else {
      event.target.innerText = "Dark Theme";
    }
  };

  hide_elements = () => {
    for (element of NoteArea) {
      if (!element.hasAttribute("hidden")) {
        element.toggleAttribute("hidden");
      }
    }
  };
  
  clear_text = () => (document.querySelector("textarea").value = "");

  save = () => {
    var title = prompt("Please enter a title for this note.");
    var body = document.querySelector("textarea").value;
    Add_to_List(title, body);
    clear_text();
  };
  

  NoteList_HTML.addEventListener("click",FindNote);
  

  document.getElementById("Save").addEventListener("click", save);
  

  document.getElementById("Dark").addEventListener("click", dark_light_mode);
 
  document.getElementById("NewNote").addEventListener("click", show_elements);
  

  document.getElementById("Cancel").addEventListener("click", hide_elements);
  

  clear_text();