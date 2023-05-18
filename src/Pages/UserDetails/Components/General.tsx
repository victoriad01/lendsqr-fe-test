import { UserdetailsInterface } from '../Userdetails'

interface Fetched {
  fetchedData: UserdetailsInterface | null
}

export const GeneralComponent = ({ fetchedData }: Fetched) => {
  console.log(fetchedData)
  return (
    <div className='forth-block'>
      <div>
        <div className='personal-info'>
          <p className='info-head'>Personal Information</p>
        </div>
        <div className='wrap-container'>
          <div>
            <div className='wrap-items button-space'>
              <p className='title'>FULL NAME</p>
              <p className='title-detail'>
                {fetchedData?.profile?.firstName +
                  ' ' +
                  fetchedData?.profile?.lastName}
              </p>
            </div>
            <div className='wrap-items'>
              <p className='title'>Marital Status</p>
              <p className='title-detail'>Single</p>
            </div>
          </div>
          <div>
            <div className='wrap-items button-space'>
              <p className='title'>Phone Number</p>
              <p className='title-detail'>{fetchedData?.phoneNumber}</p>
            </div>

            <div className='wrap-items'>
              <p className='title'>Children</p>
              <p className='title-detail'>None</p>
            </div>
          </div>

          <div>
            <div className='wrap-items button-space'>
              <p className='title'>Email Address</p>
              <p className='title-detail'>{fetchedData?.email}</p>
            </div>
            <div>
              <p className='title'>Type of residence</p>
              <p className='title-detail'>{fetchedData?.profile?.address}</p>
            </div>
          </div>

          <div className='wrap-items'>
            <p className='title'>BVN</p>
            <p className='title-detail'>{fetchedData?.profile?.bvn}</p>
          </div>
          <div className='wrap-items'>
            <p className='title'>GENDER</p>
            <p className='title-detail'>{fetchedData?.profile?.gender}</p>
          </div>
        </div>
      </div>
      <div>
        <div className='personal-info'>
          <p className='info-head'>Education and Employment</p>
        </div>
        <div className='wrap-container'>
          <div>
            <div className='wrap-items button-space'>
              <p className='title'>level of education</p>
              <p className='title-detail'>{fetchedData?.education?.level}</p>
            </div>
            <div className='wrap-items'>
              <p className='title'>office email</p>
              <p className='title-detail'>
                {fetchedData?.education?.officeEmail}
              </p>
            </div>
          </div>
          <div>
            <div className='wrap-items button-space'>
              <p className='title'>employment status</p>
              <p className='title-detail'>
                {fetchedData?.education?.employmentStatus}
              </p>
            </div>

            <div className='wrap-items'>
              <p className='title'>Monthly income</p>

              {fetchedData?.education?.monthlyIncome.map(
                (income: string, index: number) => (
                  <p key={index} className='title-detail'>
                    {income}
                  </p>
                )
              )}
            </div>
          </div>

          <div>
            <div className='wrap-items button-space'>
              <p className='title'>sector of employment</p>
              <p className='title-detail'>{fetchedData?.education?.sector}</p>
            </div>
            <div>
              <p className='title'>loan repayment</p>
              <p className='title-detail'>
                {fetchedData?.education?.loanRepayment}
              </p>
            </div>
          </div>

          <div className='wrap-items'>
            <p className='title'>Duration of employment</p>
            <p className='title-detail'> {fetchedData?.education?.duration}</p>
          </div>
        </div>
      </div>
      <div>
        <div className='personal-info'>
          <p className='info-head'>Socials</p>
        </div>
        <div className='wrap-container'>
          <div>
            <div className='wrap-items '>
              <p className='title'>Twitter</p>
              <p className='title-detail'>{fetchedData?.socials?.twitter}</p>
            </div>
          </div>
          <div>
            <div className='wrap-items'>
              <p className='title'>Facebook</p>
              <p className='title-detail'>{fetchedData?.socials?.facebook}</p>
            </div>
          </div>
          <div>
            <p className='title'>Instagram</p>
            <p className='title-detail'>{fetchedData?.socials?.instagram}</p>
          </div>
        </div>
      </div>
      <div>
        <div className='personal-info'>
          <p className='info-head'>Guarantor</p>
        </div>
        <div className='wrap-container'>
          <div className='wrap-items button-space'>
            <p className='title'>FULL NAME</p>
            <p className='title-detail'>
              {fetchedData?.guarantor?.firstName +
                ' ' +
                fetchedData?.guarantor?.lastName}
            </p>
          </div>
          <div className='wrap-items'>
            <p className='title'>Phone Number</p>
            <p className='title-detail'>
              {fetchedData?.guarantor?.phoneNumber}
            </p>
          </div>
          <div>
            <p className='title'>Email Address</p>
            <p className='title-detail'> {fetchedData?.guarantor?.email}</p>
          </div>

          <div className='wrap-items'>
            <p className='title'>Relationship</p>
            <p className='title-detail'>
              {fetchedData?.guarantor?.relationship}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
