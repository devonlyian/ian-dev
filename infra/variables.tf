variable "project_name" {
  description = "Project name for resource naming"
  type        = string
  default     = "ian-dev"
}

variable "location" {
  description = "Azure region for resources"
  type        = string
  default     = "koreacentral"
}

variable "environment" {
  description = "Environment (dev, staging, prod)"
  type        = string
  default     = "dev"
}
