# RADx-DHT Mapping Introduction

RADx-DHT uses the [Datacite Metadata Schema](https://schema.datacite.org) as its metadata specification.  While not exactly the same, the RADx Metadata Specification is influenced by Datacite and many fields in the RADx Metadata Template have a one-to-one correspondance with metadata fields in the Datacite metadata schema.

## Important Differences

1. The RADx Metadata Specification is designed for _per-file_ metadata.  In otherwords, each RADx metadata instance describes a specific file.  Pre-existing RADx-DHT metata on the other hand is _per-study_ metadata and thus describes multiple files.  When looking at the [RADx-DHT to RADx Metadata specification mapping](radx-dht-mapping.md) users should keep this in mind.
2. The RADx-Metadata Specification uses Internationalized Resource Identifiers (IRIs) for the values of fields that are controlled terms.  Consider this example, which illustrates the differences between the two specifications.  The value of the RADx-DHT `creators[0].nameType` field can be `"Personal"` or `"Organizational"`.  In the RADx-Metadata Specification these values are the IRIs `"http://vocab.fairdatacollective.org/gdmt/Person"` (see [Person](http://vocab.fairdatacollective.org/gdmt/Person)) and `"http://vocab.fairdatacollective.org/gdmt/Organization"` (see [Organization](http://vocab.fairdatacollective.org/gdmt/Person)).  Both of these IRIs can be resolved to structured data or human readable resources that explain the meanings of them.  Where possible we indicate the direct mappings.


## Example Metadata

We use the example metadata below, which is metadata for a RADx-DHT study.  For each top-level field we provide a mapping description.

```json
{
    "id": "https://doi.org/10.57895/me7r-vp06",
    "doi": "10.57895/ME7R-VP06",
    "url": "https://rapids.ll.mit.edu/10.57895/me7r-vp06",
    "types": {
        "ris": "DATA",
        "bibtex": "misc",
        "citeproc": "dataset",
        "schemaOrg": "Dataset",
        "resourceType": "Survey",
        "resourceTypeGeneral": "Dataset"
    },
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
        },
        {
            "name": "Hswen, Yulin",
            "nameType": "Personal",
            "givenName": "Yulin",
            "familyName": "Hswen",
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
                    "nameIdentifier": "https://orcid.org/0000-0003-3203-1322",
                    "nameIdentifierScheme": "ORCID"
                }
            ]
        }
    ],
    "titles": [
        {
            "lang": "en",
            "title": "Covidseeker and COVID-19 Citizen Science",
            "titleType": null
        }
    ],
    "publisher": "RAPIDS – Rapid AI Platform for Innovating Data Science ",
    "subjects": [
        {
            "subject": "FOS: Medical and health sciences",
            "valueUri": "http://www.oecd.org/science/inno/38235147.pdf",
            "schemeUri": "http://www.oecd.org/science/inno",
            "subjectScheme": "Fields of Science and Technology (FOS)"
        }
    ],
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
    ],
    "dates": [
        {
            "date": " 2020-09-14/2021-03-15",
            "dateType": "Other",
            "dateInformation": "Contract start and end dates"
        }
    ],
    "publicationYear": 2022,
    "language": "en",
    "identifiers": [],
    "sizes": [
        "6 MB",
        "33 Files"
    ],
    "formats": [
        "csv",
        "html",
        "pdf",
        "xlsx"
    ],
    "version": "1.0",
    "rightsList": [],
    "descriptions": [
        {
            "lang": "en",
            "description": "This study integrated Covidseeker, a tool for real-tine geospatial temporal mobile data for digital contact tracing and COVID-19 hotspotting, into a customized version of the COVID-19 Citizen Science Study. ",
            "descriptionType": "Abstract"
        }
    ],
    "geoLocations": [
        {
            "geoLocationPlace": "Multiple"
        }
    ],
    "fundingReferences": [
        {
            "awardUri": "https://reporter.nih.gov/project-details/10274151",
            "awardTitle": "DIGITAL HEALTH SOLUTIONS FOR COVID-19: COVIDSEEKER AND COVID-19 CITIZEN SCIENCE",
            "funderName": "National Institutes of Health",
            "awardNumber": "75N91020C00039",
            "funderIdentifier": "https://doi.org/10.13039/100000002",
            "funderIdentifierType": "Crossref Funder ID"
        }
    ],
    "relatedIdentifiers": [],
    "schemaVersion": "http://datacite.org/schema/kernel-4",
    "providerId": "mit",
    "clientId": "mit.rapids",
    "agency": "datacite",
    "state": "draft"
}
```