import { Tooltip, IconButton, Container, Box, Typography, Link, Divider } from '@mui/material';
import { styled } from '@mui/system';
import text from "../public/text.json";
import { useState, useEffect } from 'react';
import TranslateIcon from '@mui/icons-material/Translate';

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  paddingLeft: '2rem'
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  borderColor: '#808080', 
  borderWidth: '1.5px', 
  marginTop: '50px'
}));

const ProposalInfo = () => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage; 
    setLanguage(userLang.startsWith('zh') ? 'zh' : 'en');
  }, []);

  return (
    <Container maxWidth="lg">

      {/* Header */}
      <Box textAlign="center" mt={3}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Typography 
            variant="h2" 
            sx={{
              fontSize: {xs: '50px', sm: '60px'}, 
              textShadow: '2px 2px 4px rgba(0, 0, 0, 1)', 
              color: "#f2a900", 
              fontFamily: "'VT323', monospace",
            }}>
            {text[language]["main_page"]["header"]}
          </Typography>
        </Link>
      </Box>

      {/* Links */}
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link href="https://activation.watch/" style={{ textDecoration: 'none' }}>
          <Typography 
            variant="h6" 
            sx={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
              fontWeight: '500',
              fontSize: {xs: '16px', sm: '20px'},
              color: '#F2F2F2',
              marginRight: '15px',
              padding: '8px 16px',
              border: '2px solid #F2F2F2',
              borderRadius: '8px',
              transition: 'all 0.3s',
              '&:hover': {
                color: '#f2a900',
                borderColor: '#f2a900',
                backgroundColor: 'rgba(242, 169, 0, 0.1)',
              }
            }}
          >
            {text[language]["main_page"]["links"]["link3"]}
          </Typography>
        </Link>
        <Link href="https://activation.watch/bip/APO" style={{ textDecoration: 'none' }}>
          <Typography 
            variant="h6" 
            sx={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
              fontWeight: '500',
              fontSize: {xs: '16px', sm: '20px'},
              color: '#F2F2F2',
              marginRight: '15px',
              padding: '8px 16px',
              border: '2px solid #F2F2F2',
              borderRadius: '8px',
              transition: 'all 0.3s',
              '&:hover': {
                color: '#f2a900',
                borderColor: '#f2a900',
                backgroundColor: 'rgba(242, 169, 0, 0.1)',
              }
            }}
          >
            {text[language]["main_page"]["links"]["link4"]}
          </Typography>
        </Link>
        <Link href="/proposalinfo" style={{ textDecoration: 'none' }}>
          <Typography 
            variant="h6" 
            sx={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
              fontWeight: '500',
              fontSize: {xs: '16px', sm: '20px'},
              color: '#F2F2F2',
              marginRight: '15px',
              padding: '8px 16px',
              border: '2px solid #F2F2F2',
              borderRadius: '8px',
              transition: 'all 0.3s',
              '&:hover': {
                color: '#f2a900',
                borderColor: '#f2a900',
                backgroundColor: 'rgba(242, 169, 0, 0.1)',
              }
            }}
          >
            {text[language]["main_page"]["links"]["link2"]}
          </Typography>
        </Link>
        <Link href="/howtosignal" style={{ textDecoration: 'none' }}>
          <Typography 
            variant="h6" 
            sx={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
              fontWeight: '500',
              fontSize: {xs: '16px', sm: '20px'},
              color: '#F2F2F2',
              padding: '8px 16px',
              border: '2px solid #F2F2F2',
              borderRadius: '8px',
              transition: 'all 0.3s',
              '&:hover': {
                color: '#f2a900',
                borderColor: '#f2a900',
                backgroundColor: 'rgba(242, 169, 0, 0.1)',
              }
            }}
          >
            {text[language]["main_page"]["links"]["link1"]}
          </Typography>
        </Link>
        
        <Tooltip title="Change Language" sx={{marginLeft: '5px'}}>
          <IconButton 
            size="large"
            aria-label="change language" 
            onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
          >
            <TranslateIcon 
              sx={{
                color: '#F2F2F2', 
                fontSize: {xs: '1.5rem', sm: '1.5rem'},
                transition: 'color 0.3s',
                '&:hover': {
                  color: '#f2a900',
                }
              }}
            />
          </IconButton>
        </Tooltip>
      </Box>

      <Box sx={{ color: "#F2F2F2", marginTop: '70px'}}>
        <StyledTypography variant="h4" sx={{ marginTop: '70px' }}>
          {language === 'en' ? 'Proposal Information' : '提案信息'}
        </StyledTypography>
        <StyledTypography variant="h6" sx={{ marginTop: '10px', marginBottom: '30px'}}>
          {language === 'en' 
            ? 'This page provides information about Bitcoin Improvement Proposals (BIPs) and other Bitcoin protocol upgrade proposals.'
            : '本页面提供有关比特币改进提案 (BIPs) 和其他比特币协议升级提案的信息。'}
        </StyledTypography>
      </Box>

      <Box sx={{ 
        color: '#F2F2F2', 
        marginTop: '20px',
        overflowX: 'auto',
        '& table': {
          borderCollapse: 'collapse',
          borderSpacing: 0,
          width: '100%',
          backgroundColor: '#343a40',
          border: '1px solid #454d55',
        },
        '& td': {
          borderColor: '#454d55',
          borderStyle: 'solid',
          borderWidth: '1px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '14px',
          overflow: 'hidden',
          padding: '10px 5px',
          wordBreak: 'normal',
          color: '#F2F2F2',
        },
        '& th': {
          borderColor: '#454d55',
          borderStyle: 'solid',
          borderWidth: '1px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '14px',
          fontWeight: 'bold',
          overflow: 'hidden',
          padding: '10px 5px',
          wordBreak: 'normal',
          color: '#f2a900',
          backgroundColor: '#222',
        },
        '& .tg-j6zm': {
          fontWeight: 'bold',
          textAlign: 'left',
          verticalAlign: 'bottom',
        },
        '& .tg-7zrl': {
          textAlign: 'left',
          verticalAlign: 'bottom',
        },
        '& tr:nth-of-type(even)': {
          backgroundColor: 'rgba(255,255,255,0.05)',
        },
        '& tr:hover': {
          backgroundColor: 'rgba(255,255,255,0.075)',
        }
      }}>
        <table className="tg">
          <thead>
            <tr>
              <th className="tg-j6zm">{language === 'en' ? 'Bit' : '比特位'}</th>
              <th className="tg-j6zm">{language === 'en' ? 'Ticker' : '代号'}</th>
              <th className="tg-j6zm">{language === 'en' ? 'BIP #' : 'BIP 编号'}</th>
              <th className="tg-j6zm">{language === 'en' ? 'Description' : '描述'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tg-7zrl">1</td>
              <td className="tg-7zrl">CAT</td>
              <td className="tg-7zrl">347</td>
              <td className="tg-7zrl">{language === 'en'
                ? 'BIP 347 (OP_CAT) seeks to reintroduce the OP_CAT opcode, enabling the concatenation of data elements in Bitcoin Script, which would allow for more expressive smart contracts and complex spending conditions.'
                : 'BIP 347 (OP_CAT) 旨在重新引入 OP_CAT 操作码，使比特币脚本中的数据元素能够连接，从而允许更具表现力的智能合约和复杂的支出条件。'}</td>
            </tr>
            <tr>
              <td className="tg-7zrl">2</td>
              <td className="tg-7zrl">CTV</td>
              <td className="tg-7zrl">119</td>
              <td className="tg-7zrl">{language === 'en'
                ? 'BIP 119 (OP_CHECKTEMPLATEVERIFY or CTV) proposes a new opcode that lets users restrict how and where specific UTXOs can be spent by committing to a template of the spending transaction, enabling advanced features like vaults, congestion control, and payment pools.'
                : 'BIP 119 (OP_CHECKTEMPLATEVERIFY 或 CTV) 提出了一种新的操作码，通过提交支出交易的模板，让用户限制特定 UTXO 的支出方式和地点，从而实现保险库、拥塞控制和支付池等高级功能。'}</td>
            </tr>
            <tr>
              <td className="tg-7zrl">3</td>
              <td className="tg-7zrl">QNTUM</td>
              <td className="tg-7zrl">360</td>
              <td className="tg-7zrl">{language === 'en'
                ? 'BIP 360 outlines a transition plan to quantum-resistant cryptography for Bitcoin by introducing new output types and hybrid signature schemes to mitigate the risks posed by future quantum computers.'
                : 'BIP 360 通过引入新的输出类型和混合签名方案，概述了比特币向抗量子密码学过渡的计划，以减轻未来量子计算机带来的风险。'}</td>
            </tr>
            <tr>
              <td className="tg-7zrl">4</td>
              <td className="tg-7zrl">RDTS</td>
              <td className="tg-7zrl">444</td>
              <td className="tg-7zrl">{language === 'en'
                ? 'BIP 444 (Reduced Data Temporary Softfork) Temporarily limit the size of data fields at the consensus level.'
                : 'BIP 444（缩减数据临时软分叉）暂时限制共识级别的数据字段大小。'}</td>
            </tr>
            <tr>
              <td className="tg-7zrl">5</td>
              <td className="tg-7zrl">DC</td>
              <td className="tg-7zrl">300</td>
              <td className="tg-7zrl">{language === 'en'
                ? 'BIP 300 (OP_DRIVECHAIN or DC) enables the creation of Bitcoin sidechains called Drivechains, where miners approve withdrawals from sidechains back to the main chain, allowing experimentation with new features without changing Bitcoin\'s base layer.'
                : 'BIP 300 (OP_DRIVECHAIN 或 DC) 使创建称为驱动链的比特币侧链成为可能，矿工批准从侧链回到主链的提款，允许在不改变比特币基础层的情况下尝试新功能。'}</td>
            </tr>
            <tr>
              <td className="tg-7zrl">6</td>
              <td className="tg-7zrl">GCC</td>
              <td className="tg-7zrl">{language === 'en' ? 'none' : '无'}</td>
              <td className="tg-7zrl">{language === 'en'
                ? 'The Great Consensus Cleanup (GCC) is a proposal to remove or clarify ambiguous, unused, or dangerous rules in Bitcoin\'s consensus code, improving maintainability and reducing attack surface.'
                : '大共识清理 (GCC) 是一项提议，旨在删除或澄清比特币共识代码中模糊、未使用或危险的规则，提高可维护性并减少攻击面。'}</td>
            </tr>
            <tr>
              <td className="tg-7zrl">7</td>
              <td className="tg-7zrl">GSR</td>
              <td className="tg-7zrl">{language === 'en' ? 'none' : '无'}</td>
              <td className="tg-7zrl">{language === 'en'
                ? 'The Great Script Restoration (GSR) aims to re-enable previously disabled or restricted Bitcoin Script opcodes, such as OP_CAT, to expand scripting capabilities and programmability.'
                : '大脚本恢复 (GSR) 旨在重新启用先前禁用或限制的比特币脚本操作码，如 OP_CAT，以扩展脚本功能和可编程性。'}</td>
            </tr>
            <tr>
              <td className="tg-7zrl">8</td>
              <td className="tg-7zrl">TXHSH</td>
              <td className="tg-7zrl">{language === 'en' ? 'none' : '无'}</td>
              <td className="tg-7zrl">{language === 'en'
                ? 'OP_TXHASH (TXHSH) is a proposed opcode that allows scripts to access the hash of the current transaction, enabling introspection and more dynamic contract logic.'
                : 'OP_TXHASH (TXHSH) 是一个提议的操作码，允许脚本访问当前交易的哈希值，实现内省和更动态的合约逻辑。'}</td>
            </tr>
            <tr>
              <td className="tg-7zrl">9</td>
              <td className="tg-7zrl">VAULT</td>
              <td className="tg-7zrl">345</td>
              <td className="tg-7zrl">{language === 'en'
                ? 'BIP 345 (OP_VAULT or VAULT) allows users to set secure withdrawal conditions and recovery paths for their bitcoin.'
                : 'BIP 345 (OP_VAULT 或 VAULT) 允许用户为其比特币设置安全的提款条件和恢复路径。'}</td>
            </tr>
          </tbody>
        </table>
      </Box>

      <Box sx={{ 
        color: '#F2F2F2', 
        marginTop: '50px',
        marginBottom: '50px',
        fontSize: '14px',
        '& a': {
          color: '#007bff',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
            color: '#0056b3',
          }
        }
      }}>
        <StyledTypography variant="body1" sx={{ marginBottom: '10px' }}>
          {language === 'en' 
            ? 'Proposals are sorted alphabetically, descriptions were created by AI, using the following sources:'
            : '提案按字母顺序排序，描述由人工智能创建，使用以下来源：'}
        </StyledTypography>
        <ul style={{ paddingLeft: '20px' }}>
          <li>
            <Link href="https://github.com/bitcoin/bips" target="_blank">
              {language === 'en' ? 'BIPs Repo' : 'BIPs 仓库'}
            </Link>
          </li>
          <li>
            <Link href="https://en.bitcoin.it/wiki/Covenants_support" target="_blank">
              {language === 'en' ? 'Covenants Support Table' : '契约支持表'}
            </Link>
          </li>
          <li>
            <Link href="https://bitcoin.softforks.org/" target="_blank">
              {language === 'en' ? 'Bitcoin Softforks Table' : '比特币软分叉表'}
            </Link>
          </li>
          <li>
            {language === 'en' ? 'OP Next Schedule -- ' : 'OP Next 时间表 -- '}
            <Link href="https://blockspace.media/opnext-bitcoin-scaling/" target="_blank">
              {language === 'en' ? '2024' : '2024年'}
            </Link>
            {', '}
            <Link href="https://opnextschedule.my.canva.site/" target="_blank">
              {language === 'en' ? '2025' : '2025年'}
            </Link>
          </li>
        </ul>
      </Box>

    </Container>
  );
}

export default ProposalInfo;
