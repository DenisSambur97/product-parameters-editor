import React from 'react';
import ParamEditor from './ParamEditor';

function App() {
    // Пример параметров и модели
    const params = [
        { id: 1, name: 'Назначение', type: 'string' as const }, // Используйте "as const" для явного указания типа
        { id: 2, name: 'Длина', type: 'string' as const }
    ];

    const model = {
        paramValues: [
            { paramId: 1, value: 'повседневное' },
            { paramId: 2, value: 'макси' }
        ]
    };

    // Функция для обработки изменений параметров
    const handleParamChange = (paramId: number, value: string) => {
        console.log(`Параметр ${paramId} изменен на значение ${value}`);
    };

    return (
        <div className="App">
            {/* Передаем параметры, модель и функцию обработки изменений в ParamEditor */}
            <ParamEditor params={params} model={model} onParamChange={handleParamChange} />
        </div>
    );
}

export default App;
