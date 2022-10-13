# About

## Development of the Metadata Specification

The RADx Metadata Specification adopts a widely used community standard (DataCite 3.4) for describing data files. After defining (in a Google sheet) the important DataCite attributes to include in the specification, these attributes were encoded as a [JSON-LD](https://json-ld.org) specification using the [CEDAR Workbench](https://cedar.metadatacenter.org). The JSON-LD specification is the document we call the RADx Metadata Specification. It uses a schema format called the CEDAR Template Model, which is designed so that individual metadata descriptions (the metadata files provided by the RADx (C)DCCs to the Data Hub) contain well-defined values. With this approach, the RADx metadata will conform to a well-described JSON-LD syntax and can be validated easily at any time.

For this release of the RADx Metadata Specification, we adopted much of the [DataCite](https://datacite.org) specification, following a pattern previously set by another community that created a Generic Dataset Metadata Template in CEDAR. We then added several sections of metadata that allowed more detailed provenance descriptions of the data, and adjusted many of the field descriptions so RADx users could better understand what was expected.

Finally, we wrote software to convert our Google Sheet metadata specification into a CEDAR Template in the CEDAR Template Model format, and wrote GitHub Actions to convert the content of the spreadsheet into the specification documentation provided at this Web site. We verified its operation by filling out working metadata examples. The verified template from CEDAR is submitted to the Metadata Specification Repository in GitHub, allowing us to keep track of the versions and compare older versions as needed.
