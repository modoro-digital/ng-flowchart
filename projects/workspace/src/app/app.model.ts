export const JsonDel = {
    root: {
        id: 's16631226233221233',
        type: 'log',
        data: {
            name: 'Log',
            icon: {
                name: 'log-icon',
                color: 'blue'
            },
            config: {
                message: null,
                severity: null
            }
        },
        children: [
            {
                id: 's1663125141629',
                type: 'router',
                data: {
                    name: 'Routing Block'
                },
                children: [
                    {
                        id: 's1663125142365',
                        type: 'route-step',
                        data: {
                            name: 'New Route',
                            condition: '',
                            sequence: 1
                        },
                        children: []
                    },
                    {
                        id: 's1663125142920',
                        type: 'route-step',
                        data: {
                            name: 'New Route',
                            condition: '',
                            sequence: 2
                        },
                        children: []
                    },
                    {
                        id: 's1663125143328',
                        type: 'route-step',
                        data: {
                            name: 'New Route',
                            condition: '',
                            sequence: 3
                        },
                        children: []
                    },
                    {
                        id: 's1663125143558',
                        type: 'route-step',
                        data: {
                            name: 'New Route',
                            condition: '',
                            sequence: 4
                        },
                        children: []
                    },
                    {
                        id: 's1663125143743',
                        type: 'route-step',
                        data: {
                            name: 'New Route',
                            condition: '',
                            sequence: 5
                        },
                        children: []
                    },
                    {
                        id: 's1663125143936',
                        type: 'route-step',
                        data: {
                            name: 'New Route',
                            condition: '',
                            sequence: 6
                        },
                        children: []
                    },
                    {
                        id: 's1663125144145',
                        type: 'route-step',
                        data: {
                            name: 'New Route',
                            condition: '',
                            sequence: 7
                        },
                        children: []
                    },
                    {
                        id: 's1663125145738',
                        type: 'route-step',
                        data: {
                            name: 'New Route',
                            condition: '',
                            sequence: 8
                        },
                        children: []
                    },
                    {
                        id: 's1663125146812',
                        type: 'route-step',
                        data: {
                            name: 'New Route',
                            condition: '',
                            sequence: 9
                        },
                        children: []
                    },
                    {
                        id: 's1663125148519',
                        type: 'route-step',
                        data: {
                            name: 'New Route',
                            condition: '',
                            sequence: 10
                        },
                        children: []
                    },
                    {
                        id: 's1663125150093',
                        type: 'route-step',
                        data: {
                            name: 'New Route',
                            condition: '',
                            sequence: 11
                        },
                        children: []
                    }
                ]
            }
        ]
    }
};

export const Json =
    [{ id: 'trigger', title: "New contact subscribes to mail list", type: "ElementTrigger", child: 129232567, options: { key: "welcome-new-subscriber", type: "list-subscription", init: "true" }, last_executed: null, evaluationResult: null }, { id: 129232567, title: "Send email `Welcome to Acelle newsletter LIST`", type: "ElementAction", child: 885780417, options: { init: "true", email_uid: "612770c785ddb", template: "true" }, last_executed: null, evaluationResult: null }, { id: 885780417, title: "Condition not set up yet", type: "ElementCondition", child: null, options: { key: "condition", type: "open", email: null, wait: "1 day" }, last_executed: null, evaluationResult: null, childYes: 885780411237, childNo: null }, { id: 885780411237, title: "Condition not set up yet", type: "ElementCondition", child: null, options: { key: "condition", type: "open", email: null, wait: "1 day" }, last_executed: null, evaluationResult: null, childYes: 885780411231237, childNo: null }, { id: 885780411231237, title: "Condition not set up yet", type: "ElementCondition", child: null, options: { key: "condition", type: "open", email: null, wait: "1 day" }, last_executed: null, evaluationResult: null, childYes: null, childNo: null }]
