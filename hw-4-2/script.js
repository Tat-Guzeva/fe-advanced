'use strict'
const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGHT: 2,
};

//Model
const notepad = {
  notes: [],
  getNotes(){
    return this.notes;
  },
  saveNote(note){
    this.notes.push(note);
  },
  findNoteById(id){
    for(const note of this.notes){
      if(note.id === id){
        return note;
      }
    }
  },
  updateNotePriority(id, priority){
    const note = this.findNoteById(id);

    if(!note) return;
    note.priority = priority;
  },
  filterNotesByQuery(query = ''){
    const filteredNotes = [];
    console.log(filteredNotes);
    for(const note of this.notes){
      const noteContent = `${note.title} ${note.body}`;
      const hasQuery = noteContent.toLowerCase().includes(query.toLowerCase());
      console.log(hasQuery);
      if(hasQuery){
        filteredNotes.push(note);
      }
      /*const hasQueryInTitle = note.title
        .toLowerCase()
        .includes(query.toLowerCase());

      const hasQueryInBody = note.body
        .toLowerCase()
        .includes(query.toLowerCase());

      if(hasQueryInTitle || hasQueryInBody){
        filteredNotes.push(note);
      }*/
    }
    return filteredNotes;
  },
  deleteNote(id){
    for(let i = 0; i < this.notes.length; i += 1){
      const note = this.notes[i];

      if(note.id === id){
        this.notes.splice(i, 1);
        return;
      }
    }
  },
/*  updateNoteContent(id, updatedContents){
    const note = this.findNoteById(id);

    if(!note) return;

    note[updatedContents.field] = updatedContents.value;
  }*/
//Деструктуризируем второй параметр
updateNoteContent(id, {field, value}){
  const note = this.findNoteById(id);

  if(!note) return;

  note[field] = value;
}
};

notepad.saveNote({
  id: 1,
  title: 'JavaScript essentials',
  body:
    'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
  priority: PRIORITY_TYPES.HIGH,
});

notepad.saveNote({
  id: 2,
  title: 'Refresh HTML and CSS',
  body:
    'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
  priority: PRIORITY_TYPES.NORMAL,
});

notepad.saveNote({
  id: 3,
  title: 'Get comfy with Frontend frameworks',
  body:
    'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
  priority: PRIORITY_TYPES.NORMAL,
});

notepad.saveNote({
  id: 4,
  title: 'Winter clothes',
  body:
    "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: PRIORITY_TYPES.LOW,
});

//console.log('Все текущие заметки: ', notepad.getNotes());

//console.log(notepad.findNoteById(2));

/*
 * Зима уже близко, пора поднять приоритет на покупку одежды
 */
notepad.updateNotePriority(4, PRIORITY_TYPES.NORMAL);
// Смотрю что у меня в заметках
console.log(
  'Заметки после обновления приоритета для id 4: ',
  notepad.getNotes(),
);

/*
 * Решил что фреймворки отложу немного, понижаю приоритет
 */
notepad.updateNotePriority(3, PRIORITY_TYPES.LOW);
console.log(
  'Заметки после обновления приоритета для id 3: ',
  notepad.getNotes(),
);

/*
 * Решил отфильтровать заметки по слову html
 */
console.log(
  'Отфильтровали заметки по ключевому слову "html": ',
  notepad.filterNotesByQuery('html'),
);

/*
 * Решил отфильтровать заметки по слову javascript
 */
console.log(
  'Отфильтровали заметки по ключевому слову "javascript": ',
  notepad.filterNotesByQuery('javascript'),
);


/*
 * Обновим контент заметки с id 3
 */
//notepad.updateNoteContent(3, {title: 'Get comfy with React.js or Vue.js' });
notepad.updateNoteContent(3, {
  field: 'title',
  value: 'Get comfy with React.js',
});
console.log(
  'Заметки после обновления контента заметки с id 3: ',
  notepad.getNotes(),
);

/*
 * Повторил HTML и CSS, удаляю запись c id 2
 */
notepad.deleteNote(2);
console.log('Заметки после удаления с id 2: ', notepad.getNotes());