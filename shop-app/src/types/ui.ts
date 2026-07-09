export type NotificationStatus = "pending" | "success" | "error";

export type Notification = {
  status: NotificationStatus;
  title: string;
  message: string;
};

export interface UiState {
  cartIsVisible: boolean;
  wishlistIsVisible: boolean;
  notification: Notification | null;
}
