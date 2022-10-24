# RADx Metadata Specification Documentation

A repo specifically for documentation for the RADx metadata specification.  To view the live documentation visit [this page](https://radx.github.io/radx-metadata-specification-docs).

## Building the documentation

This documentation is written using the [mkdocs](https://www.mkdocs.org) framework.  

To build and serve this documentation locally you will need to install mkdocs.  Follow the installation in the [mkdocs user guide](https://www.mkdocs.org/user-guide/).

After installing mkdocs, clone this repo locally and then open a terminal with the working directory set to the root directory of the local repo.   Next use the command `mkdocs serve`.  To view the documentation, open a browser at `http://127.0.0.1:8000`.

## Workflow

Documentation is automatically built on a commit to the `main` branch of this remote GitHub repository.  Successfully built documentation will typically be available for end-users to view a few minutes after the commit has taken place.  Because of this any experimental or pre-release documentation should be committed to a branch other than `main`.