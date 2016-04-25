/**
 * Note Service Constructor.
 * @param {Angular.$http} $http Angular http service.
 * @param {Angular.$q} $q Angular promise service.
 */
Example.NoteService = function($http, $q) {
  // @typedef Object{
  //   id: {string},
  //   title: {string},
  //   content: {string}}
  this._notes = {};
  this._nextId = 0;

  this._isLoading = false;
  this._http = $http;
  this._q = $q;
};

Example.NoteService.prototype.initNotes = function() {
  var self = this;

  this._isLoading = true;
  var deferred = this._q.defer();
  if (angular.equals({}, this._notes)) {
    this._http.get(Example.constants.LIST_NOTES_URL)
      .success(function(data, status, headers, config) {
        //*** Fill the note list.
        for (var n in data.notes) {
          self._notes[data.notes[n].id] = data.notes[n];
        }
        self._nextId = data.notes.length;
        self._isLoading = false;
        deferred.resolve(self._notes);
      }).error(function(data, status, headers, config) {
        self._isLoading = false;
        deferred.reject("Could not get notes");
      });
  } else {
    deferred.resolve(self._notes);
  }
  return deferred.promise;
};

Example.NoteService.prototype.listNotes = function() {
  return this.initNotes();
};

Example.NoteService.prototype.getNote = function(id) {
  var self = this;
  var deferred = this._q.defer();
  if (angular.equals({}, this._notes)) {
    this.initNotes().then(function() {
      var note = self._notes[id];
      deferred.resolve(note);
    });
  } else {
    deferred.resolve(this._notes[id]);
  }
  return deferred.promise;
};

Example.NoteService.prototype.updateNote = function(note) {
  this._notes[note.id] = note;
};

Example.NoteService.prototype.createEmptyNote = function() {
  var previewNextId = this._nextId + 1;
  this.createNote(Example.constants.DEFAULT_NOTE_TITLE + previewNextId,
      Example.constants.DEFAULT_NOTE_CONTENT);
};

Example.NoteService.prototype.createNote = function(title, content) {  
  this._nextId++;
  this._notes[this._nextId] = {
    id: this._nextId,
    title: title,
    content: content
  };
};

Example.NoteService.prototype.deleteNote = function(id) {
  delete this._notes[id];
};

Example.NoteService.prototype.isLoading = function() {
  return this._isLoading;
};