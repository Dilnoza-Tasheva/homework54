const CreateTable = () => {
    const result = [];

    for (let i = 0; i < 36; i++) {
        result.push({hasItem:false, clicked: false})
    }

    return result;
};

export default CreateTable;