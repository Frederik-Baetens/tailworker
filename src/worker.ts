/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	// MY_KV_NAMESPACE: KVNamespace;
	//
	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	//
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	// MY_BUCKET: R2Bucket;
	//
	// Example binding to a Service. Learn more at https://developers.cloudflare.com/workers/runtime-apis/service-bindings/
	// MY_SERVICE: Fetcher;
	//
	// Example binding to a Queue. Learn more at https://developers.cloudflare.com/queues/javascript-apis/
	// MY_QUEUE: Queue;
}

export default {
    	async tail(events: TailEvent[], env: Env, ctx: ExecutionContext) {
        //let message = "eyo"
        try {
            await fetch("https://oraclevm.scuddb.net", {
              method: "POST",
              body: JSON.stringify(events[0].diagnosticsChannelEvents[0].message),
            })
        } catch (e) {
            await fetch("https://oraclevm.scuddb.net", {
              method: "POST",
              body: JSON.stringify(e.message),
            })
        }

        //for (const event of events) {
        //    for (const diagEvent of event.diagnosticsChannelEvents) {
        //        await fetch("https://oraclevm.scuddb.net", {
        //          method: "POST",
        //          body: JSON.stringify(diagEvent),
        //        })
        //    }
        //}
	},
};
