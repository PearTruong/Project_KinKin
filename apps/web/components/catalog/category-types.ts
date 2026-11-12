import { Category } from '@/lib/categories-adapter';

export type CategoryPreviewState =
  | 'initial' // 1:30676
  | 'add_modal' // 1:30870
  | 'add_empty_error' // 1:31075
  | 'add_duplicate_error' // 1:31281
  | 'add_save_error' // 1:31487
  | 'add_success' // 1:31696
  | 'delete_confirm' // 1:31908
  | 'delete_has_products_error' // 1:32110
  | 'delete_not_found_error' // 1:32307
  | 'delete_error' // 1:32490
  | 'delete_success' // 1:32687
  | 'edit_modal' // 1:32871
  | 'edit_unchanged_info' // 1:33080
  | 'edit_empty_error' // 1:33277
  | 'edit_duplicate_error' // 1:33487
  | 'edit_save_error' // 1:33697
  | 'edit_success'; // 1:33910

export interface CategoryNotification {
  type: 'success' | 'error' | 'info';
  message: string;
}
