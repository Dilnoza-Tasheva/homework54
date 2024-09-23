const CreateTable = () => {
    const result = [];

    for (let i = 0; i < 36; i++) {
        result.push({hasItem:false, clicked: false})
    }

    const randomIndex = Math.floor(Math.random() * 36);

    resurl[randomIndex].hasItem = true;

    return result;
};

export default CreateTable;