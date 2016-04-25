/**
 * List View Controller Constructor.
 * @param {Angular.$q} $q Angular promise service.
 * @param {Angular.$scope} $scope 
 * @param {Example.NoteService} noteService.
 */
Example.ListController = function($q, $scope, $location, noteService) {
  //*** Get the list of TODOs.
  this._ij = {
    scope: $scope,
    location: $location,
    noteService: noteService
  };

  var self = this;
  //*** Load note information upon startup.
  noteService.listNotes().then(function(notes) {
   self.notes = notes;
  });
};

Example.ListController.prototype.showNote = function(id) {
  this._ij.location.path("detail/" + id);
};

//*** TODO: remove this before the class.
Example.ListController.prototype.deleteNote = function(id) {
  this._ij.noteService.deleteNote(id);
};