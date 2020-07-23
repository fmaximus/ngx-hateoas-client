import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HalConfigurationService } from './config/hal-configuration.service';
import { HttpConfigService } from './config/http-config.service';

export { HalConfiguration } from './config/hal-configuration.interface';
export { HalConfigurationService } from './config/hal-configuration.service';
export { Resource } from './hal-resource/model/resource';
export { EmbeddedResource } from './hal-resource/model/embedded-resource';
export { CollectionResource } from './hal-resource/model/collection-resource';
export { PagedCollectionResource } from './hal-resource/model/paged-collection-resource';
export { SortOrder, Include } from './hal-resource/model/declarations';
export { HalResourceOperation } from './service/hal-resource-operation';
export { HalResourceService } from './service/hal-resource.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    HttpClient,
    HttpConfigService
  ],
  exports: [HttpClientModule]
})
export class NgxHalClientModule {
  static forRoot(): ModuleWithProviders<NgxHalClientModule> {
    return {
      ngModule: NgxHalClientModule,
      providers: [
        HttpClient,
        HalConfigurationService
      ]
    };
  }
}
