const handleSubmit = (evt) => {
  evt.preventDefault();

  // get form data to parse
  const formData = new FormData(evt.target);

  // push entries to an object
  let entries = {};
  for (const [name, value] of formData) {
    entries[name] = value;
  }

  // add time entry to page list
  new TimeEntry(
    {
      task: entries.taskName,
      date: entries.taskDate,
      hours: entries.taskHours,
    },
    ".entry-list" // pass in a CSS selector
  ).onAdd();
};

class TimeEntry {
  _container = document.createElement("div");

  _taskName = document.createElement("h3");

  _taskDate = document.createElement("p");

  _taskHours = document.createElement("p");

  constructor(entries, parentSelector) {
    this.task = entries.task;
    this.date = entries.date;
    this.hours = entries.hours;
    this.parent = document.querySelector(parentSelector);
  }
  onAdd = () => {
    // destructure
    const { _taskName, _taskDate, _taskHours, _container, parent } = this;

    // task
    _taskName.innerText = this.task;
    _container.appendChild(this._taskName);

    // date
    _taskDate.innerText = this.date;
    _container.appendChild(this._taskDate);

    //hours
    _taskHours.innerText = `${this.hours} hours`;
    _container.appendChild(this._taskHours);

    _container.className = "task-item";

    parent.appendChild(this._container);
  };
}
