# RADx-rad Metadata Mapping

This page explains how to take pre-existing RADx-rad metadata and convert it into RADx Metadata.  It should be noted that the pre-existing RADx-rad metadata specification is for study-level metadata but the RADx Metadata Specification is for data-file-level metadata.  Despite this, the majority of study-level fields can be mapped into the data-file-level fields described in this metadata specification.

## contact_PI

The `contact_PI` field should be mapped into a [Data File Contributors](specification.md#data-file-contributors) element.

The [Contributor Role](specification.md#contributor-role) field should be set to [http://vocab.fairdatacollective.org/gdmt/ProjectLeader](http://vocab.fairdatacollective.org/gdmt/ProjectLeader).

The [Contributor Type](specification.md#contributor-type) field should be set to [http://vocab.fairdatacollective.org/gdmt/Person](http://vocab.fairdatacollective.org/gdmt/Person).  

The [Contributor Name](specification.md#contributor-name) field should be set to the name of the PI.  Set the [Contributor Given Name](specification.md#contributor-given-name) and [Contributor Family Name](specification.md#contributor-family-name) the the given and family name of the PI as appropriate.  

The [Contributor Identifier](specification.md#contributor-identifier) field should be set to the identifier for the PI.  We recommend an identifier from the [ORCID](https://orcid.org).  In this case the value of the contributor field should be set to [https://orcid.org](https://orcid.org).  

Set the [Contributor Affiliation](specification.md#contributor-affiliation) to the name of the institution that the PI belongs to.  The [Contributor Affiliation Identifier](specification.md#contributor-affiliation-identifier) should be set to the identifier for the insitution.  We recommend the value to be an identifier from the [Research Organization Registry](https://ror.org).  Set the [Contributor Affliation Identifier Scheme](specification.md#contributor-affiliation-identifier-scheme) to the name of the scheme for the identifier.

The [Contributor Email](specification.md#contributor-email) field should be set to the email address of the PI.


All other fields in the [Data File Contributors](specification.md#data-file-contributors) element should not be specified.
 
## source_organization 

The `source_organization` field should be mapped into a [Data File Contributors](specification.md#data-file-contributors) element. 

The [Contributor Type](specification.md#contributor-type) field should be set to [http://vocab.fairdatacollective.org/gdmt/Organization](http://vocab.fairdatacollective.org/gdmt/Organization) to specify that the information is about a specific organization rather than a specific person.

The [Contributor Name](specification.md#contributor-name) field should be set to the name of the organization.  

The [Contributor Identifier](specification.md#contributor-identifier) field should be set to the identifier for the organization.  We recommend an identifier from the [Research Organization Registry](https://ror.org).  In this case the value of the contributor field should be set to [https://ror.org](https://ror.org).  

All other fields in the [Data File Contributors](specification.md#data-file-contributors) element should not be specified.

## project_title	

The `project_title` field should be specified as the [Study Name](specification.md#data-file-parent-studies) field in the [Data File Parent Studies](specification.md#data-file-parent-studies) element.  This element also contains other information relating to project identifiers.

## NIH_project_ID 	

The `NIH_project_ID` field should be specified as the [Study Identifier](specification.md#study-identifier) field in the [Data File Parent Studies](specification.md#data-file-parent-studies) element.  

The [Study Identifier Scheme](specification.md#study-identifier-scheme) is related to this element and should be set appropriately.  We recommend that the resolvable URL form of NIH project identifier is set, which means this field should be set to [http://vocab.fairdatacollective.org/gdmt/URL](http://vocab.fairdatacollective.org/gdmt/URL).

## project_research_area

The `project_research_area` should be described in terms from the [Medical Subject Headings (MeSH)](https://www.nlm.nih.gov/mesh/) thesaurus.  MeSH terms should be specified using the  [Data File Subjects](specification.md#data-file-subjects) element using the [Subject Identifier](specification.md#subject-identifier) field.  If you cannot find the appropriate subject terms in MeSH then you should use the [Keyword](specification.md#keyword) field to specify free text keywords.

## creatorORaccountable_for_data_files 	

The `creatorORaccountable_for_data_files` fields should be specified using the [Data File Creators](specification.md#data-file-creators) element.  The RADx metadata schema assumes that the data file creator is either a Person or an Organization.  

### Assuming that the data file creator is a person

The [Creator Type](specification.md#creator-type) field should be set to [http://vocab.fairdatacollective.org/gdmt/Person](http://vocab.fairdatacollective.org/gdmt/Person).

The [Creator Name](specification.md#creator-name) field should be set to the name of the person who created the file.  Set the [Creator Given Name](specification.md#creator-given-name) and [Creator Family Name](specification.md#creator-family-name) to the given and family name of the creator as appropriate.

The [Creator Identifier](specification.md#creator-identifier) field should be set to the identifier for the person.  We recommend an identifier from the [ORCID](https://orcid.org).  In this case the value of the [Creator Identifier Scheme](specification.md#creator-identifier-scheme) should be set to [https://orcid.org](https://orcid.org).  Other identifier schemes should set the identifier scheme field as appropriate.

Set the [Creator Affiliation](specification.md#creator-affiliation) to the name of the institution that the PI belongs to.  The [Creator Affiliation Identifier](specification.md#creator-affiliation-identifier) should be set to the identifier for the insitution.  We recommend the value to be an identifier from the [Research Organization Registry](https://ror.org).  Set the [Creator Affliation Identifier Scheme](specification.md#creator-affiliation-identifier-scheme) to the name of the scheme for the identifier.

The [Creator Email](specification.md#creator-email) field should be set to the email address of the PI.


## completed_registration_with_dbGaP

This field is not directly supported in the core RADx Metadata Specification.  Information may however be preserved in the [Auxiliary Metadata](specification.md#auxiliary-metadata) field.

## dbGaP_study_ID	

The `dbGaP_study_ID` field should be specified as the [PHS Identifier](specification.md#data-file-parent-studies) field in the [Data File Parent Studies](specification.md#data-file-parent-studies) element.

## description_of_project

There is no direct equivalent of this field in the RADx Metadata Specification.  If the project description is applicable to the actual data file contents then this description may be inserted in the [description](specification.md#description) field for the data file.  If the project description is not appropriate for the data file then the project description may be inserted in the [Additional Commentary](specification.md#additional-commentary) field of the the [Auxiliary Metdata](specification.md#auxiliary-metadata) element.

## keywords

Data file `keywords` should be specified in terms from the [Medical Subject Headings (MeSH)](https://www.nlm.nih.gov/mesh/) thesaurus.  MeSH terms should be specified using the  [Data File Subjects](specification.md#data-file-subjects) element using the [Subject Identifier](specification.md#subject-identifier) field.  If you cannot find the appropriate subject terms in MeSH then you should use the [Keyword](specification.md#keyword) field to specify free text keywords.

## vocabularyORthesaurus_used

This field is not applicable in the RADx Metadata Specification.  The value of this field may however be preserved using the [Auxiliary Metadata](specification.md#auxiliary-metadata) element, if desired.

## publication_url

This item should be entered into a [Data File Related Resources](specification.md#data-file-related-resources) element.  The publication URL should be entered in the [Related Resource Identifier](specification.md#related-resource-identifier) field.  The [Related Resource Identifier Type](specification.md#related-resource-identifier-type) field should be set to [http://vocab.fairdatacollective.org/gdmt/URL](http://vocab.fairdatacollective.org/gdmt/URL).

## study_include_prospective_or_retrospective_human_samples

There is no direct equivalent of this field in the RADx Metadata Specification. However, this item may be inserted in the [Auxiliary Metadata](specification.md#auxiliary-metadata) element.

## collected_NIH_Minimum_CDEs_for_all_datasets

There is no direct equivalent of this field in the RADx Metadata Specification. However, this item may be inserted in the [Auxiliary Metadata](specification.md#auxiliary-metadata) element.

## NIH_PO_approved_waiver_for_Minimum_CDE

There is no direct equivalent of this field in the RADx Metadata Specification. However, this item may be inserted in the [Auxiliary Metadata](specification.md#auxiliary-metadata) element.

## data_dictionary_for_all_datafiles	


There is no direct equivalent of this field in the RADx Metadata Specification. However, this item may be inserted in the [Auxiliary Metadata](specification.md#auxiliary-metadata) element.

## name_of_data_dictionary_file

This item should be entered in the [Data Dictionary File Name](specification.md#data-dictionary-file-name) field.

## type_of_sample_used

There is no direct equivalent of this field in the RADx Metadata Specification. However, this item may be inserted in the [Auxiliary Metadata](specification.md#auxiliary-metadata) element.

## method_of_data_analysis

There is no direct equivalent of this field in the RADx Metadata Specification. However, this item may be inserted in the [Auxiliary Metadata](specification.md#auxiliary-metadata) element.  Alternatively, it is possible that information from this field could be encoded a [Data File Creation Processes](specification.md#data-file-creation-processes) element.

## number_of_datafiles_in_this_package

This item is not applicable to RADx per-file Metadata.  

## datafile_names

This item is not applicable to RADx per-file Metadata.  

## file description

The value of this field should be entered in the [descripton](specification.md#description) field of the the [Data File Descriptions](specification.md#data-file-descriptions) element.

<!-- 

| Field Label | Choices |	Descriptions | 
|-------------|---------|----------------|
| contact_PI |  enter your text here |	| 
| source_organization	|  enter your text here |	| 
| project_title	|  enter your text here |	| 
| NIH_project_ID	|  enter your text here |	| 
| project_research_area	|  enter your text here |	| 
| creatorORaccountable_for_data_files	|  enter your text here |	| 
| completed_registration_with_dbGaP	Yes | No	| 
| dbGaP_study_ID - not_NIH_project_ID	|  enter your text here |	| 
| description_of_project	|  enter your text here |	| 
| keywords	|  enter your text here |	| 
| vocabularyORthesaurus_used - if_applicable	|  enter your text here |	| 
| publication_url - if_applicable	text	| 
| study_include_prospective_or_retrospective_human_samples - effective_Feb_2021	prospective | retrospective | N/A	| 
| collected_NIH_Minimum_CDEs_for_all_datasets	Yes | No	| 
| NIH_PO_approved_waiver_for_Minimum_CDE	Yes | No	| 
| data_dictionary_for_all_datafiles	Yes | No	| 
| name_of_data_dictionary_file	|  enter your text here |	| 
| type_of_sample_used - blood_breath_wastewater_ etc	|  enter your text here |	| 
| method_of_data_analysis - software_statistical_approach	|  enter your text here |	| 
| number_of_datafiles_in_this_package	|  enter your text here |	| 
| datafile_names - add_additional_rows_as_needed	enter file name here	enter file description (free text format)|  -->