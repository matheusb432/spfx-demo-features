import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import {
  BaseClientSideWebPart,
  WebPartContext,
} from "@microsoft/sp-webpart-base";

import * as strings from "FetchListDemoWebPartStrings";
import FetchListDemo, {
  FetchListDemoProps,
} from "./components/FetchListDemo/FetchListDemo";
import { sp } from "@pnp/sp";

export interface IFetchListDemoWebPartProps {
  description: string;
}

export default class FetchListDemoWebPart extends BaseClientSideWebPart<IFetchListDemoWebPartProps> {
  constructor(context: WebPartContext) {
    super();

    sp.setup({
      spfxContext: context,
    });
  }

  public render(): void {
    const element: React.ReactElement<FetchListDemoProps> = React.createElement(
      FetchListDemo,
      {
        description: this.properties.description,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.DescriptionFieldLabel,
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
