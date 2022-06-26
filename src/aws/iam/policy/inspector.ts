/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoninspector.html
 */
export enum InspectorAction {

  /**
   * Write - Grants permission to assign attributes (key and value pairs) to the findings that are specified by the ARNs of the findings
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_AddAttributesToFindings.html
   */
  AddAttributesToFindings = "inspector:AddAttributesToFindings",

  /**
   * Write - Grants permission to create a new assessment target using the ARN of the resource group that is generated by CreateResourceGroup
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_CreateAssessmentTarget.html
   */
  CreateAssessmentTarget = "inspector:CreateAssessmentTarget",

  /**
   * Write - Grants permission to create an assessment template for the assessment target that is specified by the ARN of the assessment target
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_CreateAssessmentTemplate.html
   */
  CreateAssessmentTemplate = "inspector:CreateAssessmentTemplate",

  /**
   * Write - Grants permission to start the generation of an exclusions preview for the specified assessment template
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_CreateExclusionsPreview.html
   */
  CreateExclusionsPreview = "inspector:CreateExclusionsPreview",

  /**
   * Write - Grants permission to create a resource group using the specified set of tags (key and value pairs) that are used to select the EC2 instances to be included in an Amazon Inspector assessment target
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_CreateResourceGroup.html
   */
  CreateResourceGroup = "inspector:CreateResourceGroup",

  /**
   * Write - Grants permission to delete the assessment run that is specified by the ARN of the assessment run
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_DeleteAssessmentRun.html
   */
  DeleteAssessmentRun = "inspector:DeleteAssessmentRun",

  /**
   * Write - Grants permission to delete the assessment target that is specified by the ARN of the assessment target
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_DeleteAssessmentTarget.html
   */
  DeleteAssessmentTarget = "inspector:DeleteAssessmentTarget",

  /**
   * Write - Grants permission to delete the assessment template that is specified by the ARN of the assessment template
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_DeleteAssessmentTemplate.html
   */
  DeleteAssessmentTemplate = "inspector:DeleteAssessmentTemplate",

  /**
   * Read - Grants permission to describe the assessment runs that are specified by the ARNs of the assessment runs
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeAssessmentRuns.html
   */
  DescribeAssessmentRuns = "inspector:DescribeAssessmentRuns",

  /**
   * Read - Grants permission to describe the assessment targets that are specified by the ARNs of the assessment targets
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeAssessmentTargets.html
   */
  DescribeAssessmentTargets = "inspector:DescribeAssessmentTargets",

  /**
   * Read - Grants permission to describe the assessment templates that are specified by the ARNs of the assessment templates
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeAssessmentTemplates.html
   */
  DescribeAssessmentTemplates = "inspector:DescribeAssessmentTemplates",

  /**
   * Read - Grants permission to describe the IAM role that enables Amazon Inspector to access your AWS account
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeCrossAccountAccessRole.html
   */
  DescribeCrossAccountAccessRole = "inspector:DescribeCrossAccountAccessRole",

  /**
   * Read - Grants permission to describe the exclusions that are specified by the exclusions' ARNs
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeExclusions.html
   */
  DescribeExclusions = "inspector:DescribeExclusions",

  /**
   * Read - Grants permission to describe the findings that are specified by the ARNs of the findings
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeFindings.html
   */
  DescribeFindings = "inspector:DescribeFindings",

  /**
   * Read - Grants permission to describe the resource groups that are specified by the ARNs of the resource groups
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeResourceGroups.html
   */
  DescribeResourceGroups = "inspector:DescribeResourceGroups",

  /**
   * Read - Grants permission to describe the rules packages that are specified by the ARNs of the rules packages
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeRulesPackages.html
   */
  DescribeRulesPackages = "inspector:DescribeRulesPackages",

  /**
   * Read - Grants permission to produce an assessment report that includes detailed and comprehensive results of a specified assessment run
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_GetAssessmentReport.html
   */
  GetAssessmentReport = "inspector:GetAssessmentReport",

  /**
   * Read - Grants permission to retrieve the exclusions preview (a list of ExclusionPreview objects) specified by the preview token
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_GetExclusionsPreview.html
   */
  GetExclusionsPreview = "inspector:GetExclusionsPreview",

  /**
   * Read - Grants permission to get information about the data that is collected for the specified assessment run
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_GetTelemetryMetadata.html
   */
  GetTelemetryMetadata = "inspector:GetTelemetryMetadata",

  /**
   * List - Grants permission to list the agents of the assessment runs that are specified by the ARNs of the assessment runs
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListAssessmentRunAgents.html
   */
  ListAssessmentRunAgents = "inspector:ListAssessmentRunAgents",

  /**
   * List - Grants permission to list the assessment runs that correspond to the assessment templates that are specified by the ARNs of the assessment templates
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListAssessmentRuns.html
   */
  ListAssessmentRuns = "inspector:ListAssessmentRuns",

  /**
   * List - Grants permission to list the ARNs of the assessment targets within this AWS account
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListAssessmentTargets.html
   */
  ListAssessmentTargets = "inspector:ListAssessmentTargets",

  /**
   * List - Grants permission to list the assessment templates that correspond to the assessment targets that are specified by the ARNs of the assessment targets
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListAssessmentTemplates.html
   */
  ListAssessmentTemplates = "inspector:ListAssessmentTemplates",

  /**
   * List - Grants permission to list all the event subscriptions for the assessment template that is specified by the ARN of the assessment template
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListEventSubscriptions.html
   */
  ListEventSubscriptions = "inspector:ListEventSubscriptions",

  /**
   * List - Grants permission to list exclusions that are generated by the assessment run
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListExclusions.html
   */
  ListExclusions = "inspector:ListExclusions",

  /**
   * List - Grants permission to list findings that are generated by the assessment runs that are specified by the ARNs of the assessment runs
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListFindings.html
   */
  ListFindings = "inspector:ListFindings",

  /**
   * List - Grants permission to list all available Amazon Inspector rules packages
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListRulesPackages.html
   */
  ListRulesPackages = "inspector:ListRulesPackages",

  /**
   * Read - Grants permission to list all tags associated with an assessment template
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = "inspector:ListTagsForResource",

  /**
   * Read - Grants permission to preview the agents installed on the EC2 instances that are part of the specified assessment target
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_PreviewAgents.html
   */
  PreviewAgents = "inspector:PreviewAgents",

  /**
   * Write - Grants permission to register the IAM role that Amazon Inspector uses to list your EC2 instances at the start of the assessment run or when you call the PreviewAgents action
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_RegisterCrossAccountAccessRole.html
   */
  RegisterCrossAccountAccessRole = "inspector:RegisterCrossAccountAccessRole",

  /**
   * Write - Grants permission to remove entire attributes (key and value pairs) from the findings that are specified by the ARNs of the findings where an attribute with the specified key exists
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_RemoveAttributesFromFindings.html
   */
  RemoveAttributesFromFindings = "inspector:RemoveAttributesFromFindings",

  /**
   * Tagging - Grants permission to set tags (key and value pairs) to the assessment template that is specified by the ARN of the assessment template
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_SetTagsForResource.html
   */
  SetTagsForResource = "inspector:SetTagsForResource",

  /**
   * Write - Grants permission to start the assessment run specified by the ARN of the assessment template
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_StartAssessmentRun.html
   */
  StartAssessmentRun = "inspector:StartAssessmentRun",

  /**
   * Write - Grants permission to stop the assessment run that is specified by the ARN of the assessment run
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_StopAssessmentRun.html
   */
  StopAssessmentRun = "inspector:StopAssessmentRun",

  /**
   * Write - Grants permission to enable the process of sending Amazon Simple Notification Service (SNS) notifications about a specified event to a specified SNS topic
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_SubscribeToEvent.html
   */
  SubscribeToEvent = "inspector:SubscribeToEvent",

  /**
   * Write - Grants permission to disable the process of sending Amazon Simple Notification Service (SNS) notifications about a specified event to a specified SNS topic
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_UnsubscribeFromEvent.html
   */
  UnsubscribeFromEvent = "inspector:UnsubscribeFromEvent",

  /**
   * Write - Grants permission to update the assessment target that is specified by the ARN of the assessment target
   * @see https://docs.aws.amazon.com/inspector/latest/APIReference/API_UpdateAssessmentTarget.html
   */
  UpdateAssessmentTarget = "inspector:UpdateAssessmentTarget",

  /**
   * * - Grant all inspector permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoninspector.html
   */
  All = "inspector:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoninspector.html
 */
export const InspectorResource = {
}
