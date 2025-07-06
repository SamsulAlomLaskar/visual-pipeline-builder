import { useStore } from './store';

export const SubmitButton = () => {
    const { nodes, edges } = useStore();

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nodes, edges }),
            });

            if (!response.ok) throw new Error('Request failed');

            const result = await response.json();
            alert(
                `✅ Pipeline Analysis:\n\n🔹 Nodes: ${result.num_nodes}\n🔹 Edges: ${result.num_edges}\n🔹 Is DAG: ${result.is_dag ? '✅ Yes' : '❌ No'}`
            );
        } catch (err) {
            console.error(err);
            alert('❌ Failed to submit pipeline. Check console or backend server.');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};
