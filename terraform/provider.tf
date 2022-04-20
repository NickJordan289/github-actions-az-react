variable "BACKEND_KEY" {
  type     = string
  nullable = false 
  sensitive = true
}

terraform {
  # backend "local" {}
  backend "azurerm" {
    resource_group_name  = "GithubActionsNode"
    storage_account_name = "terraformbackendghan"
    container_name       = "terraform-state"
    key                  = "terraform.tfstate"
    access_key           = var.BACKEND_KEY
  }
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "3.0.2"
    }
  }
}

provider "azurerm" {
  features {}
}
