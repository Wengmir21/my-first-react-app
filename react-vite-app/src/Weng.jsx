const human = {
    name: 'wengmir',
    age: '21',
    handsomeness: '100',
    theme: {
        backgroundColor: 'black',
        color: 'yellow'
    }

}

export default function Mouse () {
    return (
        <>
            <h1>{human.name} is {human.age} year's old and {human.handsomeness}% handsome </h1>
        </>
    );
}