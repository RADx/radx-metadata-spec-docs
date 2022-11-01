# RADx-rad Mapping Introduction

This documentation explains how to take pre-existing RADx-rad metadata and convert it into RADx Metadata.  It should be noted that the pre-existing RADx-rad metadata specification is for study-level metadata but the RADx Metadata Specification is for data-file-level metadata.  Despite this, the majority of study-level fields can be mapped into the data-file-level fields described in this metadata specification.

## RADx-rad Metadata Template

The RADx-rad metadata template is defined in a spreadsheet (CSV file) shown below.  Our mapping is based on the content of this spreadsheet.

|Field Label                                                                  |Choices                          |Descriptions                             |
|-----------------------------------------------------------------------------|---------------------------------|-----------------------------------------|
|contact_PI                                                                   |enter your text here             |                                         |
|source_organization                                                          |enter your text here             |                                         |
|project_title                                                                |enter your text here             |                                         |
|NIH_project_ID                                                               |enter your text here             |                                         |
|project_research_area                                                        |enter your text here             |                                         |
|creatorORaccountable_for_data_files                                          |enter your text here             |                                         |
|completed_registration_with_dbGaP                                            |Yes &#124; No                         |                                         |
|dbGaP_study_ID - not_NIH_project_ID                                          |enter your text here             |                                         |
|description_of_project                                                       |enter your text here             |                                         |
|keywords                                                                     |enter your text here             |                                         |
|vocabularyORthesaurus_used - if_applicable                                   |enter your text here             |                                         |
|publication_url - if_applicable                                              |text                             |                                         |
|study_include_prospective_or_retrospective_human_samples - effective_Feb_2021|prospective &#124; retrospective &#124; N/A|                                         |
|collected_NIH_Minimum_CDEs_for_all_datasets                                  |Yes &#124; No                         |                                         |
|NIH_PO_approved_waiver_for_Minimum_CDE                                       |Yes &#124; No                         |                                         |
|data_dictionary_for_all_datafiles                                            |Yes &#124; No                         |                                         |
|name_of_data_dictionary_file                                                 |enter your text here             |                                         |
|type_of_sample_used - blood_breath_wastewater_ etc                           |enter your text here             |                                         |
|method_of_data_analysis - software_statistical_approach                      |enter your text here             |                                         |
|number_of_datafiles_in_this_package                                          |enter your text here             |                                         |
|datafile_names - add_additional_rows_as_needed                               |enter file name here             |enter file description (free text format)|

