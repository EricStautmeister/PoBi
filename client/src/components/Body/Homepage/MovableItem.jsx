import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes, WINDOWS } from './constants';
import '../../styling/css/MovableComponent.css';

export default function MovableItem({ Item, setItems, onClick }) {
    const data = Item.data;
    const position = Item.position;

    const changePosition = (currentItem, displayContext) => {
        setItems((previousState) => {
            return previousState.map((previousItem) => {
                return {
                    ...previousItem,
                    displayContext:
                        previousItem.data.name === currentItem.name
                            ? displayContext
                            : previousItem.displayContext,
                };
            });
        });
    };

    const [{ isDragging }, drag] = useDrag({
        item: { name: data.name, left: position.left, top: position.top },
        type: ItemTypes.CORE,
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            console.log();
            if (dropResult && dropResult.name === WINDOWS.MAINWINDOW) {
                changePosition(item, WINDOWS.MAINWINDOW);
            } else {
                changePosition(item, WINDOWS.SIDEBAR);
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const opacity = isDragging ? 0.6 : 1;

    const options = {
        ref: drag,
        style: { opacity },
        onClick: () => onClick({ data })
    };

    return <>{Item.jsx(options.ref, options.style, options.onClick)}</>;
}
