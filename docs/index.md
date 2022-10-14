![RADx](https://radx-hub.nih.gov/assets/img/radx-circle-collage.png)

# Introduction

These pages describe the RADx [Metadata Specification](https://cedar.metadatacenter.org/dashboard?folderId=https:%2F%2Frepo.metadatacenter.org%2Ffolders%2Fbb251c56-a720-4b39-92ea-55c053f1ad00).  This metadata specification contains a meta template that specifies required, recommended and optional fields that are used for capturing metadata that described data files submitted to the [RADx Data Hub](https://radx-hub.nih.gov/home).

We provide a simple introduction to the specification below. For detailed technical information, you can directly access the [specification fields](specification.md). After this, you can learn about the different ways of [creating metadata](creating-metadata.md) instances that describe individual data files and comply with this specification.

## Overview

While at this time the RADx Data Hub does not *require* a metadata file describing each data set, it does allow and encourage users to provide such a document. To make the provided information interoperable, the RADx Data Hub requires that provided metadata follow the specification described in this document. Only two fields are required to be provided, but many others are recommended to maximize the ability for others to find, use, and properly credit your data. (As the specification and the Data Hub mature, we expect to require a metadata description for each submitted data file, and to require additional fields be provided in the metadata.) 

The formal specification is a JSON-LD document that serves as a schema, against which provided metadata descriptions can be validated. This document can be viewed in the CEDAR Workbench (see the [About](about.md)) section, but this automatically generated document provides detailed information about all the attributes in an easy-to-read format. 

You can visit the source material from which this document is built, and see how we build the specification and the document, in the [About](about.md) section.

## Navigation

The index at the left side is the easiest way to navigate the contents on-line. Each section may be opened to show more detail as needed.
