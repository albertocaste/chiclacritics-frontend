import { HttpInterceptorFn, HttpParams } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

export const authRawgInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({
    params: req.params
      ? req.params.set('key', environment.RAWG_API_KEY)
      : new HttpParams().set('key', environment.RAWG_API_KEY),
  });
  return next(req);
};
