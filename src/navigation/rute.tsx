import React from "react";

export interface Routes {
  path: string;
  exact?: boolean;
  component: React.ComponentType;
}
