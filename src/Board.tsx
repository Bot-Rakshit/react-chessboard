import { DragOverlay } from '@dnd-kit/core';
import { snapCenterToCursor } from '@dnd-kit/modifiers';

import { Arrows } from './Arrows';
import { Draggable } from './Draggable';
import { Droppable } from './Droppable';
import { Piece } from './Piece';
import { Square } from './Square';
import { useChessboardContext } from './ChessboardProvider';
import { defaultBoardStyle } from './defaults';
import { preventDragOffBoard } from './modifiers';
import { columnIndexToChessColumn } from './utils';

export function Board() {
  const {
    allowDragOffBoard,
    board,
    boardStyle,
    chessboardColumns,
    chessboardRows,
    boardOrientation,
    currentPosition,
    draggingPiece,
    id,
    marginOptions,
    showMargin,
    coordinatesOnMargin,
    marginNotationStyle,
    notationSides,
  } = useChessboardContext();

  const renderMarginCoordinates = () => {
    if (!showMargin || !coordinatesOnMargin) return null;

    const files = [];
    const ranks = [];

    for (let i = 0; i < chessboardColumns; i++) {
      files.push(columnIndexToChessColumn(i, chessboardColumns, boardOrientation));
    }

    for (let i = 1; i <= chessboardRows; i++) {
      if (boardOrientation === 'white') {
        ranks.push(i.toString());
      } else {
        ranks.unshift(i.toString());
      }
    }

    return (
      <>
        {notationSides.top && (
          <div
            style={{
              gridColumn: '2',
              gridRow: '1',
              display: 'flex',
              backgroundColor: marginOptions.color,
            }}
          >
            {files.map((file) => (
              <div
                key={file}
                style={{
                  flex: 1,
                  ...marginNotationStyle,
                }}
              >
                {file}
              </div>
            ))}
          </div>
        )}

        {notationSides.bottom && (
          <div
            style={{
              gridColumn: '2',
              gridRow: '3',
              display: 'flex',
              backgroundColor: marginOptions.color,
            }}
          >
            {files.map((file) => (
              <div
                key={file}
                style={{
                  flex: 1,
                  ...marginNotationStyle,
                }}
              >
                {file}
              </div>
            ))}
          </div>
        )}

        {notationSides.left && (
          <div
            style={{
              gridColumn: '1',
              gridRow: '2',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: marginOptions.color,
            }}
          >
            {ranks.map((rank) => (
              <div
                key={rank}
                style={{
                  flex: 1,
                  ...marginNotationStyle,
                }}
              >
                {rank}
              </div>
            ))}
          </div>
        )}

        {notationSides.right && (
          <div
            style={{
              gridColumn: '3',
              gridRow: '2',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: marginOptions.color,
            }}
          >
            {ranks.map((rank) => (
              <div
                key={rank}
                style={{
                  flex: 1,
                  ...marginNotationStyle,
                }}
              >
                {rank}
              </div>
            ))}
          </div>
        )}

        {(!notationSides.top || !notationSides.left) && (
          <div
            style={{
              gridColumn: '1',
              gridRow: '1',
              backgroundColor: marginOptions.color,
            }}
          />
        )}
        {(!notationSides.top || !notationSides.right) && (
          <div
            style={{
              gridColumn: '3',
              gridRow: '1',
              backgroundColor: marginOptions.color,
            }}
          />
        )}
        {(!notationSides.bottom || !notationSides.left) && (
          <div
            style={{
              gridColumn: '1',
              gridRow: '3',
              backgroundColor: marginOptions.color,
            }}
          />
        )}
        {(!notationSides.bottom || !notationSides.right) && (
          <div
            style={{
              gridColumn: '3',
              gridRow: '3',
              backgroundColor: marginOptions.color,
            }}
          />
        )}

        {!notationSides.top && (
          <div
            style={{
              gridColumn: '2',
              gridRow: '1',
              backgroundColor: marginOptions.color,
            }}
          />
        )}
        {!notationSides.bottom && (
          <div
            style={{
              gridColumn: '2',
              gridRow: '3',
              backgroundColor: marginOptions.color,
            }}
          />
        )}
        {!notationSides.left && (
          <div
            style={{
              gridColumn: '1',
              gridRow: '2',
              backgroundColor: marginOptions.color,
            }}
          />
        )}
        {!notationSides.right && (
          <div
            style={{
              gridColumn: '3',
              gridRow: '2',
              backgroundColor: marginOptions.color,
            }}
          />
        )}
      </>
    );
  };

  const containerStyle = showMargin
    ? {
        display: 'grid',
        gridTemplateColumns: `${marginOptions.thickness}px 1fr ${marginOptions.thickness}px`,
        gridTemplateRows: `${marginOptions.thickness}px 1fr ${marginOptions.thickness}px`,
        width: '100%',
        height: '100%',
        aspectRatio: '1',
      }
    : { 
        width: '100%', 
        height: '100%',
        aspectRatio: '1',
      };

  const boardContainerStyle = showMargin
    ? {
        gridColumn: '2',
        gridRow: '2',
        position: 'relative' as const,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }
    : { 
        position: 'relative' as const,
        width: '100%',
        height: '100%',
      };

  return (
    <>
      <div style={containerStyle}>
        {showMargin && renderMarginCoordinates()}
        <div style={boardContainerStyle}>
          <div
            id={`${id}-board`}
            style={{ 
              ...defaultBoardStyle(chessboardColumns), 
              ...boardStyle,
              width: '100%',
              height: '100%',
              aspectRatio: '1',
            }}
          >
            {board.map((row) =>
              row.map((square) => {
                const piece = currentPosition[square.squareId];

                return (
                  <Droppable key={square.squareId} squareId={square.squareId}>
                    {({ isOver }) => (
                      <Square isOver={isOver} {...square}>
                        {piece ? (
                          <Draggable
                            isSparePiece={false}
                            position={square.squareId}
                            pieceType={piece.pieceType}
                          >
                            <Piece {...piece} position={square.squareId} />
                          </Draggable>
                        ) : null}
                      </Square>
                    )}
                  </Droppable>
                );
              }),
            )}

            <Arrows />
          </div>
        </div>
      </div>

      <DragOverlay
        dropAnimation={null}
        modifiers={[
          snapCenterToCursor,
          ...(allowDragOffBoard
            ? []
            : [preventDragOffBoard(id, draggingPiece?.position || '')]),
        ]}
      >
        {draggingPiece ? (
          <Piece
            clone
            position={draggingPiece.position}
            pieceType={draggingPiece.pieceType}
          />
        ) : null}
      </DragOverlay>
    </>
  );
}
