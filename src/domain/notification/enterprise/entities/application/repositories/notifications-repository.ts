import { Notification } from '../../notification'

export interface NotificationsRepository {
  create(notification: Notification): Promise<void>
}
