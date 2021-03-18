# Work in progress

Underdot Collection is very much a work in progress. It's missing core features, like pagination.


## Todo:

* throw error if name or directory are undefined
* resolve subdirectories, e.g. about/team -> children.about.children.team.children
* allow collection to have subdirectories, for example: /posts/2021/01/post-title, and make sure the slug has the full path
* sorting
* throw error if directory doesn't exist
* add an option to not output the individual pages, to only make the collection available in templates
* what happens if there is no metadata? does the desctructring throw an error?
