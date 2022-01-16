// augment API
import '@polkadot/api-augment';

// imports
import { ApiPromise, WsProvider } from '@polkadot/api';

async function main (): Promise<void> {
	// default creation
	const api = await ApiPromise.create({
		provider: new WsProvider('wss://polkadot.api.onfinality.io/public-ws')
	});

	// FrameSystemAccountInfo
	const { data: { free, reserved }, nonce } = await api.query.system.account('13KsApgfYuwVz27YwXCpLUHXPtKSv9WpwUEWrMRVTKCh7hsX');

	console.log(
		'nonce=', nonce.toNumber(),
		'free=', free.toString(),
		'reserved=', reserved.toString()
	);
}

main().catch(console.error);
