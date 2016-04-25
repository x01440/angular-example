/**
 * Detail View Controller.
 * @param {Angular.$location} $location Angular location service.
 * @param {Angular.$routparams} $routeparams Angular routing parameter service. 
 * @param {Example.NoteService} noteService Note service.
 */
Example.DetailController = function($location, $routeparams, noteService) {
  this._ij = {
    location: $location,
    noteService: noteService
  };
  this.id = $routeparams['id'];
  this.editMode = false;

  var self = this;
  noteService.getNote(this.id).then(function(note) {
    self.note = note;
  });
};

Example.DetailController.prototype.listNotes = function() {
  this._ij.location.path("/");
};

Example.DetailController.prototype.toggleEdit = function() {
  this.editMode = !this.editMode;
};

Example.DetailController.prototype.saveEdit = function() {
  this._ij.noteService.updateNote(this.note);
  this.toggleEdit();
};
