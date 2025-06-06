import { AppShell } from '../index/components/app-shell'
import { MyRoomsList } from '../index/components/my-rooms-list'

export default function MyRooms() {
	return (
		<AppShell>
			<div className="container py-6">
				<h1 className="text-3xl font-bold mb-6">My Rooms</h1>
				<MyRoomsList />
			</div>
		</AppShell>
	)
}
