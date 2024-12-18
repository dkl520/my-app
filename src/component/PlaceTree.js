
import { useState } from 'react'
import { initialTravelPlan } from './place'


function PlaceTree({ lists, root, handleComplete }) {
    return lists.map((node) => (
        <li key={node.id}>
            {node.title}
            {node.childPlaces.length > 0 && (
                <ol>
                    <PlaceTree lists={node.childPlaces} root={node} handleComplete={handleComplete} />
                </ol>
            )}
            <button onClick={() => handleComplete(node, root)}>Complete</button>
        </li>
    ));
}


function removeNodeFromTree(nodes, targetId) {
    return nodes.reduce((acc, node) => {
        if (node.id === targetId) {
           
            return acc;
        } else if (node.childPlaces.length > 0) {
           
            const updatedChildPlaces = removeNodeFromTree(node.childPlaces, targetId);
            return [...acc, { ...node, childPlaces: updatedChildPlaces }];
        } else {
            return [...acc, node];
        }
    }, []);
}




export default function TravelPlan() {

    const [plan, setPlan] = useState(initialTravelPlan);

    const planets = plan.childPlaces;
    function onComplete(target, root) {

        const updatedChildPlaces = removeNodeFromTree(plan.childPlaces, target.id);
        setPlan({
            ...plan,
            childPlaces: updatedChildPlaces
        });
    }

    return (
        <>
            <h2>Places to visit</h2>
            <ol>
                <PlaceTree lists={planets} root={plan} handleComplete={onComplete}></PlaceTree>
            </ol>

        </>
    )




}