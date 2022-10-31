<style>

.wy-table-responsive table td, .wy-table-responsive table th {
    white-space: normal;
}
</style>

# RADx-DHT Metadata Mapping

This page explains how to take pre-existing RADx-DHT metadata and convert it into RADx Metadata.  

## id/doi

```json
{
  "id": "https://doi.org/10.57895/me7r-vp06"
}
```

The RADx-DHT `id`/`doi` field represents the same information formatted in different ways.  We chose to map the value of the `id` field to the RADx Metadata Specification [Identifier](specification.md#identifier) field in the [Data File Identity](specification.md#data-file-identity) element.

| RADx Metadata Field | Value |
|-----------------------|---------------------|
[Identifier](specification.md#identifier) | Value of `$.id` prefixed with `"https://doi.org/"`.<br>For example, `"https://doi.org/10.57895/ME7R-VP06"`.
[Identifier Type](specification.md#identifier-type) | `"http://vocab.fairdatacollective.org/gdmt/DOI"`

## url

```json
{
  "url": "https://rapids.ll.mit.edu/10.57895/me7r-vp06"
}
```

The value of the RADx-DHT `url` field should be encoded in a [Data File Related Resources](specification.md#data-file-related-resources) element.  

| RADx Metadata Field | Value |
|-----------------------|---------------------|
[Related Resource Identifier](specification.md#related-resource-identifier) | Value of `$.url`.
| [Related Resource Identifier Type](specification.md#related-resource-identifier-type)| `"http://vocab.fairdatacollective.org/gdmt/URL"` 


## types

```json
{
  "types": {
    "ris": "DATA",
    "bibtex": "misc",
    "citeproc": "dataset",
    "schemaOrg": "Dataset",
    "resourceType": "Survey",
    "resourceTypeGeneral": "Dataset"
  }
}
```

There is no direct equivalent of this field.  Types in the RADx-DHT may be recorded in the [Auxiliary Metadata](specification.md) element.

## creators

The value of the compound `creators` field should be encoded in a [Data File Creators](specification.md#data-file-creators) element.  The fields inside this element directly parallel the fields used in the RADx-DHT specification.  

Multiple [Data File Creators](specification.md#data-file-creators) elements may be specified.  Use one element per creator.  

The JSON below shows a RADx-DHT example of a `creators` JSON object.

```json
{
    "creators": [
        {
            "name": "Marcus, Gregory",
            "nameType": "Personal",
            "givenName": "Gregory",
            "familyName": "Marcus",
            "affiliation": [
                {
                    "name": "University of California, San Francisco",
                    "schemeUri": "https://ror.org",
                    "affiliationIdentifier": "https://ror.org/043mz5j54",
                    "affiliationIdentifierScheme": "ROR"
                }
            ],
            "nameIdentifiers": [
                {
                    "schemeUri": "https://orcid.org",
                    "nameIdentifier": "https://orcid.org/0000-0001-5197-7696",
                    "nameIdentifierScheme": "ORCID"
                }
            ]
        }
    ]
}
```

Fields in a RADx-DHT `creators` object should be mapped as follows.  Note that,

- the RADx metadata specification only supports _one_ creator affiliation per [Data File Creators](specification.md#data-file-creators) element.
- the RADx metadata specification only supports _one_ creator identifier per [Data File Creators](specification.md#data-file-creators).

Set the value of the [Creator Identifier Scheme](specification.md#creator-identifier-scheme) field to one of the allowable options.  If an ORCID has been used to identify the creator then `https://orcid.org` as the value for the [Creator Identifier Scheme](specification.md#creator-identifier-scheme) field.

| RADx Metadata Field | Value |
|---------------------|-------|
[Creator Name](specification.md#creator-name) | `creators[0].name`
[Creator Type](specification.md#creator-type) |  Use `http://vocab.fairdatacollective.org/gdmt/Person` for `Personal`, <br><br> Use `http://vocab.fairdatacollective.org/gdmt/Organization` for `Organizational`.
[Creator Given Name](specification.md#creator-given-name) | `creators[0].givenName`
[Creator Family Name](specification.md#creator-family-name) | `creators[0].familyName`
[Creator Affiliation](specification.md#creator-affiliation) | `creators[0].affiliation[0].name`
[Creator Affiliation Identifier](specification.md#creator-affiliation-identifier) | `creators[0].affiliation[0].affiliationIdentifier`
[Creator Affiliation Identifier Scheme](specification.md#creator-affiliation-identifier-scheme) | `creators[0].affiliation[0].schemeUri`
[Creator Identifier Scheme](specification.md#creator-identifier-scheme) |`creators[0].nameIdentifiers[0].schemeUri`
[Creator Identifier](specification.md#creator-identifier) |`creators[0].nameIdentifiers[0].nameIdentifier`


## titles

A RADx-DHT `titles` JSON object should be encoded as a [Data File Titles](specification.md#data-file-titles) element.  Multiple [Data File Titles](specification.md#data-file-titles) elements may be specified. Use one element per title.  

The JSON below shows a RADx-DHT example of a `titles` JSON object.

```json
{
    "titles" : [
        {
            "lang": "en",
            "title": "Covidseeker and COVID-19 Citizen Science",
            "titleType": null
        }
    ]
}
```

RADx-DHT object fields should be mapped as follows:

| RADx Metadata Field | Value |
|---------------------|-------|
[Title](specification.md#title) | `titles.title` 
[Language](specification.md#language) | `titles.lang`

The `titles.titleType` is not supported in the RADx Metadata.  If this needs to be recorded then the [Auxiliary Metadata](specification.md#auxiliary-metadata) element should be used.


## publisher

The RADx-DHT `publisher` field should be encoded using fields from the [Data File Distributions](specification.md#data-file-distributions) element.

```json
{
  "publisher": "RAPIDS – Rapid AI Platform for Innovating Data Science "
}
```

| RADx Metadata Field | Value |
|---------------------|-------|
[Distribution Publisher](specification.md#distribution-publisher) | `"MIT Lincoln Laboratory"`
[Distribution Publisher Identifier](specification.md#distribution-publisher-identifier) | We suggest that this is set to `"https://ror.org/022z6jk58"`, which identifies MIT Lincoln Laboratory.
[Distribution Publisher Identifier Scheme](specification.md#distribution-publisher-identifier-scheme) | `"https://ror.org"`
[Distribution Identifier](specification.md#distribution-identifier) | The DOI for the data file
[Distribution Identifier Type](specification.md#distribution-identifier-type) | `"http://vocab.fairdatacollective.org/gdmt/DOI"`


## subjects

The RADx Metadata Specification uses the Medical Subject Headings Thesaurus (MeSH) for specifying the subjects for a data file.  We possible subjects should be translated into MeSH terms.  See the [Data File Subjects](specification.md#data-file-subjects) element for documentation on encoding subjects.

```json
{
    "subjects": [
        {
            "subject": "FOS: Medical and health sciences",
            "valueUri": "http://www.oecd.org/science/inno/38235147.pdf",
            "schemeUri": "http://www.oecd.org/science/inno",
            "subjectScheme": "Fields of Science and Technology (FOS)"
        }
    ]
}
```

For subjects that cannot be mapped into MeSH, the [keywords](specification.md#keywords) free text field should be used.


## contributors

The value of the compound `contributors` field should be encoded in a [Data File Contributors](specification.md#data-file-contributors) element.  The fields inside this element directly parallel the fields used in the RADx-DHT specification.  

Multiple [Data File Contributors](specification.md#data-file-contributors) elements may be specified.  Use one element per contributor.  

The JSON below shows a RADx-DHT example of a `contributors` JSON object.

```json
"contributors": [
    {
      "name": "MIT Lincoln Laboratory",
      "nameType": "Organizational",
      "givenName": null,
      "familyName": null,
      "affiliation": [],
      "contributorType": "DataCurator",
      "nameIdentifiers": [
        {
          "schemeUri": "https://ror.org",
          "nameIdentifier": "https://ror.org/022z6jk58",
          "nameIdentifierScheme": "ROR"
        }
      ]
    }
  ]
```

Fields in a RADx-DHT `contributors` object should be mapped as follows.  Note that,

- the RADx metadata specification only supports _one_ contributor affiliation per [Data File Contributor](specification.md#data-file-contributors) element.
- the RADx metadata specification only supports _one_ contributor identifier per [Data File Contributor](specification.md#data-file-contributors) element.

If the contributor is a person:

| RADx Metadata Field | Value |
|---------------------|-------|
[Contributor Name](specification.md#contributor-name) | `contributors[0].name` 
[Contributor Type](specification.md#contributor-type) | `"http://vocab.fairdatacollective.org/gdmt/Person"`
[Contributor Given Name](specification.md#contributor-given-name) | `contributors[0].givenName`
[Contributor Family Name](specification.md#contributor-family-name) | `contributors[0].familyName`
[Contributor Affiliation](specification.md#contributor-affiliation) | `contributors[0].affiliation[0].name`
[Contributor Affiliation Identifier Scheme](specification.md#contributor-affiliation-identifier-scheme) | `contributors[0].affiliation[0].schemeUri`
[Contributor Affiliation Identifier](specification.md#contributor-affiliation-identifier) | `contributors[0].affiliation[0].affiliationIdentifier`
[Contributor Identifier](specification.md#contributor-identifier) |`contributors[0].nameIdentifiers[0].nameIdentifier`
[Contributor Identifier Scheme](specification.md#contributor-identifier-scheme) |`contributors[0].nameIdentifiers[0].schemeUri`<br><br>If an ORCID has been used to identify the contributor then the value should be `"https://orcid.org"`.


If the contributor is an organization:

| RADx Metadata Field | Value |
|---------------------|-------|
[Contributor Name](specification.md#contributor-name) | `contributors[0].name` 
[Contributor Type](specification.md#contributor-type) | `"http://vocab.fairdatacollective.org/gdmt/Organization"`
[Contributor Identifier](specification.md#contributor-identifier) |`contributors[0].nameIdentifiers[0].nameIdentifier`
[Contributor Identifier Scheme](specification.md#contributor-identifier-scheme) |`contributors[0].nameIdentifiers[0].schemeUri`<br><br>If a Research Organization Registry (ROR) Id has been used to identify the contributing organization then the value should be `"https://ror.org"`



## dates

The RADx-DHT `dates` field should be encoded in a [Data File Dates](specification.md#data-file-dates) element.  There must be exactly _one_ date per element.  Dates represent events related to the data file itself.  Dates of events related to the funded program should be encoded elsewhere.

## publicationYear

The RADx-DHT `publicationYear` field should be encoded in a [Data File Publication Date](specification.md#data-file-publication-date) field inside a [Data File Publication Date](specification.md#data-file-publication-date).  This field can accept precise publication dates, which are preferred over "publication year".
  
## language

The RADx-DHT `language` field should be encoded in the [Primary Language](specification.md#primary-language) field contained in a [Data File Language](specification.md#data-file-language) element.  The encoding of languages uses standard [language codes](language-codes.md).  These codes are directly mappable from the RADx-DHT specification.

## identifiers

```json
{
  "identifiers": []
}
```

## sizes

The RADx-DHT `sizes` field should be encoded using fields from the [Data File Distributions](specification.md#data-file-distributions) element.  Values for this field should be merged with the values from the [publisher](#publisher) field and [formats](#formats) field.

  
```json
{
  "sizes": [
    "6 MB",
    "33 Files"
  ]
}
```


| RADx Metadata Field | Value |
|---------------------|-------|
[Distribution Size](specification.md#distribution-size) |  The distribution size _in bytes_.  To convert Megabytes to bytes multiply by 1,048,576.  For example, 6MB is `6291456` bytes.
[Distribution Identifier](specification.md#distribution-identifier) | The DOI for the data file
[Distribution Identifier Type](specification.md#distribution-identifier-type) | `"http://vocab.fairdatacollective.org/gdmt/DOI"`

Since the RADx Metadata Specification applies to single files the "33 Files" value (or any other value) that indicates the number of files is not applicable here.
  
## formats

The RADx-DHT `formats` field should be encoded using fields from the [Distribution Format](specification.md#distribution-format) element.  Values for this field should be merged with the values from the [publisher](#publisher) field and [sizes](#sizes) field.

```json
{
  "formats": [
    "csv",
    "html",
    "pdf",
    "xlsx"
  ]
}
```

| RADx Metadata Field | Value |
|---------------------|-------|
[Distribution Format](specification.md#distribution-size) |  A value from the `formats` list, for example, `"csv"`.
[Distribution Identifier](specification.md#distribution-identifier) | The DOI for the data file
[Distribution Identifier Type](specification.md#distribution-identifier-type) | `"http://vocab.fairdatacollective.org/gdmt/DOI"`
  
##  version

The RADx-DHT `version` field should be encoded in the [Version](specification.md#version) field in the [Data File Identity](specification.md#data-file-identity) element.

```json
{
  "version": "1.0"
}
```

##  rightsList

The [Data File Rights](specification.md#data-file-rights) element should be used to encode rights for the datafile.  We prefer that an identifier for the license is chosen and entered into the [License Name](specification.md#license-name) field.


## descriptions

The RADx-DHT `descriptions` field should be encoded using a [Data File Descriptions](specification.md#data-file-descriptions) element.  One element should encode exactly one description.

```json
{
    "descriptions": [
        {
            "lang": "en",
            "description": "This study integrated Covidseeker, a tool for real-tine geospatial temporal mobile data for digital contact tracing and COVID-19 hotspotting, into a customized version of the COVID-19 Citizen Science Study. ",
            "descriptionType": "Abstract"
        }
    ]
}
```

| RADx Metadata Field | Value |
|---------------------|-------|
| [Description](specification.md#description) | Value of `descriptions[0].description`
| [Description Language](specification.md#description-language) | Value of `descriptions[0].lang`


## geoLocations

The RADx-DHT `geoLocations` field should be encoded using the [Data File Spatial Coverage](specification.md#data-file-spatial-coverage) element.  This element makes it possible to encode locations using bounded boxes/shapes that are described with lat/lon coordinates.  

If place names are used to specify locations then the [Geopolitical region](specification.md#geopolitical-region) field that is contained with in a [Data File Geopolitical Coverage](specification.md#data-file-geopolitical-coverage) element  should be used to provide an identifier for a place.

## funding references


The RADx-DHT `funding references` field should be encoded using a [Data File Funding Sources](specification.md#data-file-funding-sources) element.

The JSON below shows a RADx-DHT example of a funding element.

```json
{
  "fundingReferences": [
    {
      "awardUri": "https://reporter.nih.gov/project-details/10274151",
      "awardTitle": "DIGITAL HEALTH SOLUTIONS FOR COVID-19: COVIDSEEKER AND COVID-19 CITIZEN SCIENCE",
      "funderName": "National Institutes of Health",
      "awardNumber": "75N91020C00039",
      "funderIdentifier": "https://doi.org/10.13039/100000002",
      "funderIdentifierType": "Crossref Funder ID"
    }
  ]
}
```

| RADx Metadata Field | Value |
|---------------------|-------|
[Award Title](specification.md#award-title) | Value of `fundingReferences[0].awardTitle`
[Award Page URL](specification.md#award-page-url) | Value of `fundingReferences[0].awardUri`
[Funder Name](specification.md#funder-name) | Value of `fundingReferences[0].funderName`
[Award Local Identifier](specification.md#award-local-identifier) | `fundingReferences[0].awardNumber`
[Funder Identifier](specification.md#funder-identifier) | `fundingReferences[0].funderIdentifier`.  We prefer a Research Organization Registry identifier, if possible.
[Funder Identifier Scheme](specification.md#funder-identifier-scheme) | Choose one of the available values

## relatedIdentifiers

```json
{
  "relatedIdentifiers": []
}
```

This field may be encoded using the [Data File Related Resources](specification.md#data-file-related-resources) element.  One element per related identifier should be used. For a given identifier, the [Related Resource Identifier](specification.md#related-resource-identifier) field should be used to encode the identifier and the other fields should be used to describe the type of identifier.

## schemaVersion

```json
{
  "schemaVersion": "http://datacite.org/schema/kernel-4"
}
```

This field is not directly supported in the RADx Metadata Specfification.  You may encode it using the [Auxiliary Metadata](specification.md##auxiliary-metadata) element.

## providerId

```json
{
  "providerId": "mit"
}
```

This field is not directly supported in the RADx Metadata Specfification.  You may encode it using the [Auxiliary Metadata](specification.md##auxiliary-metadata) element.

##  clientId

```json
{
  "clientId": "mit.rapids"
}
```

This field is not directly supported in the RADx Metadata Specfification.  You may encode it using the [Auxiliary Metadata](specification.md##auxiliary-metadata) element.


##  agency

```json
{
  "agency": "datacite"
}
```
This field is not directly supported in the RADx Metadata Specfification.  You may encode it using the [Auxiliary Metadata](specification.md##auxiliary-metadata) element.

##  state

```json
{
  "state": "draft"
}
```
This field is not directly supported in the RADx Metadata Specfification.  You may encode it using the [Auxiliary Metadata](specification.md##auxiliary-metadata) element.
