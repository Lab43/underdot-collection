> [!IMPORTANT]
> Underdot 2 replaces this package with [`underdot-collections`](https://github.com/Lab43/underdot/tree/main/plugins/collections#readme), developed in Lab43/underdot. This repository holds version 1 and is archived.

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
