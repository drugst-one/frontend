import { Injectable } from '@angular/core';

export type StandaloneDatasourceDefaults = Record<string, string | boolean>;

@Injectable({ providedIn: 'root' })
export class StandaloneDatasourceDefaultsService {
  private readonly storageKey = 'drugstone.standalone.datasource-defaults.v1';

  load(): StandaloneDatasourceDefaults | null {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (!stored) {
        return null;
      }

      const defaults = JSON.parse(stored);
      return defaults && typeof defaults === 'object' ? defaults : null;
    } catch {
      return null;
    }
  }

  save(defaults: StandaloneDatasourceDefaults): void {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(defaults));
    } catch {
      // Local storage may be unavailable, for example in private browsing mode.
    }
  }
}
