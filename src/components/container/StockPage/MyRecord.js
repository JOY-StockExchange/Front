import MyRecordList from '../../stockpage/MyRecordList';
import '../container.css';

const MyRecord = () => {
    return (
        <div className='container container__myrecord'>
            <div className='container__title'>내 주식</div>
            <MyRecordList />
        </div>
    )
}
export default MyRecord;